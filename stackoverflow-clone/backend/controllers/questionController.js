const Question = require("../model/questionModel");

const askQuestion = async (req, res) => {
  const postQuestionData = req.body;
  const userId = req.userId;
  const postQuestion = new Question({ ...postQuestionData, userId });
  try {
    await postQuestion.save();
    res.status(200).json("Posted a question successfully");
  } catch (error) {
    console.log(error);
    res.status(409).json("Couldn't post a new question");
  }
};

const getAnswers = async (req, res) => {
  res.send("Get request");
};

module.exports = {
  askQuestion,
  getAnswers,
};
