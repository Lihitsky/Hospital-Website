const News = require("../models/news");
const cloudinary = require("../config/cloudinary");
const optimizeImage = require("../utils/sharp");

exports.createNews = async (req, res) => {
  try {
    const files = req.files || [];
    const contentBlocks = JSON.parse(req.body.contentBlocks);

    for (let block of contentBlocks) {
      if (block.type === "image") {
        const file = files.find((f) => f.originalname === block.content);
        if (file) {
          const optimizedBuffer = await optimizeImage(file.buffer);
          const uploadResult = await cloudinary.uploader.upload_stream_promise({
            folder: "news_images",
          })(optimizedBuffer);
          block.content = uploadResult.secure_url;
        }
      }
    }

    const news = await News.create({ title: req.body.title, contentBlocks });
    res.status(201).json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Route for fetching all news
exports.getAllNews = async (req, res) => {
  try {
    const newsList = await News.findAll({ order: [["createdAt", "DESC"]] });
    res.json(newsList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Route for fetching a single news item
exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findByPk(req.params.id);
    if (!news) return res.status(404).json({ message: "News not found" });
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Route for deleting news
exports.deleteNews = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await News.findByPk(id);
    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    const contentBlocks = news.contentBlocks;
    for (const block of contentBlocks) {
      if (block.type === "image" && block.content) {
        const publicIdMatch = block.content.match(/\/([^/]+)\.[^/.]+$/);
        if (publicIdMatch) {
          const publicId = `news_images/${publicIdMatch[1]}`;
          try {
            await cloudinary.uploader.destroy(publicId);
          } catch (error) {
            console.error(`Failed to delete image ${publicId}:`, error.message);
          }
        }
      }
    }

    await news.destroy();
    res.json({
      id: id,
      message: "News and associated images deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
