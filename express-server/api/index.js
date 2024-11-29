const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const sequelize = require("../models");
const News = require("../models/News");
const fs = require("fs");

const app = express();
const port = 5000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

app.post("/news", upload.array("files", 10), async (req, res) => {
  try {
    const files = req.files || [];
    const contentBlocks = JSON.parse(req.body.contentBlocks);

    contentBlocks.forEach((block) => {
      if (block.type === "image") {
        const file = files.find((f) => f.originalname === block.content);
        if (file) block.content = `/uploads/${file.filename}`;
      }
    });

    const news = await News.create({
      title: req.body.title,
      contentBlocks,
    });

    res.status(201).json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/news", async (req, res) => {
  try {
    const newsList = await News.findAll({ order: [["createdAt", "DESC"]] });
    res.json(newsList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/news/:id", async (req, res) => {
  try {
    const news = await News.findByPk(req.params.id);
    if (!news) return res.status(404).json({ message: "News not found" });
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

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

sequelize.sync().then(() => {
  console.log("Database synced!");
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
