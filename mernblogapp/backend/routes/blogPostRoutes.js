const express = require("express");
const {
  addBlogPost,
  getAllBlogPosts,
  getPostDetails,
  updateBlogPost,
  getMyBlogs,
} = require("../controllers/postController");
const uploadMiddleware = require("../middleware/uploadMiddleware");
const { protect } = require("../middleware/authMiddleware");

const routes = express.Router();

routes.get("/getposts", getAllBlogPosts);
routes.post("/create", protect, uploadMiddleware.single("file"), addBlogPost);
routes.get("/:id", getPostDetails);
routes.put("/:id", protect, uploadMiddleware.single("file"), updateBlogPost);
routes.get("/", protect, getMyBlogs);

module.exports = routes;
