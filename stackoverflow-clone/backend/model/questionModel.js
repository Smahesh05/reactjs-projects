const mongoose = require("mongoose");

const QuestionModel = mongoose.Schema({
  questionTitle: {
    type: String,
    required: "Question must have title",
  },
  questionBody: {
    type: String,
    required: "Question must have Body",
  },
  questionTags: {
    type: String,
    required: "Question must have tags",
  },
  noOfAnswers: { type: Number, default: 0 },
  upVote: { type: [String], default: [] },
  downVote: { type: [String], default: [] },
  userPosted: { type: String, required: "Question must have an author" },
  userId: { type: String },
  askedOn: { type: Date, default: Date.now },
  answer: [
    {
      answerBody: String,
      userAnswered: String,
      userId: String,
      answeredOn: { type: Date, default: Date.now },
    },
  ],
});

const Question = mongoose.model("Question", QuestionModel);

module.exports = Question;
