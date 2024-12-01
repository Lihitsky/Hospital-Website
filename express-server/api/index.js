const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const { PostgresDialect } = require("@sequelize/postgres");
const { Sequelize, DataTypes } = require("@sequelize/core");
const { v2: cloudinary } = require("cloudinary");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure PostgreSQL Connection
const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  ssl: process.env.DB_SSL === "true",
});

// Define News Model
const News = sequelize.define("News", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contentBlocks: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route for creating news
app.post("/news", upload.array("files", 10), async (req, res) => {
  try {
    const files = req.files || [];
    const contentBlocks = JSON.parse(req.body.contentBlocks);

    // Upload images to Cloudinary and update contentBlocks
    for (let block of contentBlocks) {
      if (block.type === "image") {
        const file = files.find((f) => f.originalname === block.content);
        if (file) {
          const uploadResult = await cloudinary.uploader.upload_stream_promise({
            folder: "news_images",
          })(file.buffer);
          block.content = uploadResult.secure_url;
        }
      }
    }

    // Save news to the database
    const news = await News.create({
      title: req.body.title,
      contentBlocks,
    });

    res.status(201).json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route for fetching all news
app.get("/news", async (req, res) => {
  try {
    const newsList = await News.findAll({ order: [["createdAt", "DESC"]] });
    res.json(newsList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route for fetching a single news item
app.get("/news/:id", async (req, res) => {
  try {
    const news = await News.findByPk(req.params.id);
    if (!news) return res.status(404).json({ message: "News not found" });
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route for deleting news
app.delete("/news/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const news = await News.findByPk(id);
    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }
    await news.destroy();
    res.json({ message: "News deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Initialize database and start server
sequelize
  .authenticate()
  .then(() => console.log("Connected to PostgreSQL database"))
  .catch((err) => console.error("Unable to connect to the database:", err));

sequelize.sync().then(() => {
  console.log("Database synced!");
  app.listen(port, () => {
    console.log(`Server is running on PORT:${port}`);
  });
});

// Helper function for Cloudinary upload with Promises
cloudinary.uploader.upload_stream_promise = (options) => {
  return (fileBuffer) =>
    new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        options,
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      stream.end(fileBuffer);
    });
};
