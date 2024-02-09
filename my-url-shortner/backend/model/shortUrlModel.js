const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const ShortUrlSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: uuidv4(),
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("ShortUrl", ShortUrlSchema);
