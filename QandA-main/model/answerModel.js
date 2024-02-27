const mongoose = require("mongoose");

// Answer Schema

const AnswerSchema = new mongoose.Schema({
  body: {
    type: String,
  },
  createdAt: { type: Date, default: Date.now },
  question: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
});

module.exports = mongoose.model("Answer", AnswerSchema);
