const asyncHandler = require("express-async-handler");

const Answer = require("../model/answerModel");
const QuestionModel = require("../model/questionModel");
const AnswerModel = require("../model/answerModel");

// Post Answer
const postAnswer = asyncHandler(async (req, res) => {
  const { questionId } = req.params;
  const { body } = req.body;
  try {
    const answer = new Answer({ body, question: questionId });
    await answer.save();
    const question = await QuestionModel.findByIdAndUpdate(
      questionId,
      { $push: { answers: answer._id } },
      { new: true }
    );
    res.json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const getAnswer = async (req, res) => {
  const { id } = req.params;
  const answer = await AnswerModel.findById(id).populate("question", ["body"]);
  res.status(404).json(answer);
};

const getMyQuestionAnswers = async (req, res) => {
  try {
    const { questionId } = req.params;
    console.log("Question questionId:", questionId); // Log the questionId to check if it's correct
    const answer = await AnswerModel.find({ question: questionId });
    console.log("Answer:", answer); // Log the answer to see what's returned
    res.status(200).json(answer);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error." });
  }
};

module.exports = {
  postAnswer,
  getAnswer,
  getMyQuestionAnswers,
};
