const mongoose = require("mongoose");

const PostModel = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    postTitle: String,
    postSummary: String,
    postContent: String,
    cover: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PostModel", PostModel);
