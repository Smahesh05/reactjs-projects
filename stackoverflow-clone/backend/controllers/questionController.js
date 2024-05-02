const Question = require("../model/questionModel");

const askQuestion = async (req, res) => {
  const postQuestionData = req.body;

  const postQuestion = await Question({
    ...postQuestionData,
    userId: req.userId,
  });
  try {
    await postQuestion.save();
    res.status(200).json("Posted question successfully");
  } catch (error) {
    console.log(error);
    res.status(400).json("Couldn't post a new question");
  }
};

module.exports = {
  askQuestion,
};
