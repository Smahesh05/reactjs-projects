const PostModel = require("../models/postModel");

const getAllBlogPosts = async (req, res) => {
  const posts = await PostModel.find()
    .populate("author", ["name"])
    .sort({ createdAt: -1 })
    .limit(10);
  res.json(posts);
};

const addBlogPost = async (req, res) => {
  try {
    const { postTitle, postSummary, postContent } = req.body;

    const cover = req.file.filename;
    const fullUrl = `http://localhost:5000/uploads/${cover}`;

    const addPost = await PostModel.create({
      postTitle,
      postSummary,
      postContent,
      cover: fullUrl,
      author: req.user.id,
    });
    res.status(201).json(addPost);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getAllBlogPosts, addBlogPost };
