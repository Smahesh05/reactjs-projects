const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });

const getAllBlogPosts = (req, res) => {
  res.json({ message: "blog get request" });
};
const addBlogPost = (req, res) => {
  res.json({ files: req.file });
};

module.exports = { getAllBlogPosts, addBlogPost };
