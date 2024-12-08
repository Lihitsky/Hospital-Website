const sharp = require("sharp");

const optimizeImage = async (buffer) => {
  try {
    return await sharp(buffer)
      .resize(800, 800, { fit: "inside", withoutEnlargement: true }) // Resize to max 1200x1200
      .jpeg({ quality: 80 }) // Convert to JPEG and compress with 80% quality
      .toBuffer();
  } catch (err) {
    console.error("Error during image optimization:", err.message);
    throw err;
  }
};

module.exports = optimizeImage;
