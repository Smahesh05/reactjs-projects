const express = require("express");
const {
  addBlogPost,
  getAllBlogPosts,
} = require("../controllers/postController");
const uploadMiddleware = require("../middleware/uploadMiddleware");

const routes = express.Router();

routes.get("/getposts", getAllBlogPosts);
routes.post("/create", uploadMiddleware.single("file"), addBlogPost);

module.exports = routes;
