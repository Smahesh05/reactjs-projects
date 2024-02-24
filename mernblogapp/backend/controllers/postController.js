const PostModel = require("../models/postModel");

const getAllBlogPosts = async (req, res) => {
  const posts = await PostModel.find()
    .populate("author", ["name"])
    .sort({ createdAt: -1 })
    .limit(10);
  res.json(posts);
};

const getPostDetails = async (req, res) => {
  const { id } = req.params;
  const postDetail = await PostModel.findById(id).populate("author", ["name"]);
  res.json(postDetail);
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

// edit blog post
const updateBlogPost = async (req, res) => {
  const { id } = req.params;
  const post = await PostModel.findById(id);

  if (!post) {
    res.status(404);
    throw new Error("Blog post not found");
  }

  if (!req.user) {
    res.status(404);
    throw new Error("Author not found");
  }

  if (post.author.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedPost = await PostModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json(updatedPost);
};

const getMyBlogs = async (req, res) => {
  res.status(200).json({ meaage: "my blog" });
};

module.exports = {
  getAllBlogPosts,
  addBlogPost,
  getPostDetails,
  updateBlogPost,
  getMyBlogs,
};
