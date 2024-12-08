const express = require("express");
const {
  createNews,
  getAllNews,
  getNewsById,
  deleteNews,
} = require("../controllers/news");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/", authMiddleware, createNews);
router.get("/", getAllNews);
router.get("/:id", getNewsById);
router.delete("/:id", authMiddleware, deleteNews);

module.exports = router;
