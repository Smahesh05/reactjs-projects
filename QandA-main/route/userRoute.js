const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  updateUserProfile,
} = require("../controller/userController");

const {
  getQuestion,
  postQuestion,
} = require("../controller/questionController");

const {
  postAnswer,
  getAnswer,
  getMyQuestionAnswers,
} = require("../controller/answerController");

const { protect } = require("../middleware/userMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.put("/profile", protect, updateUserProfile);
router.post("/questions", postQuestion);
router.get("/questions", getQuestion);
router.get("/:id", getAnswer);
router.get("/question/:questionId", getMyQuestionAnswers);
router.post("/questions/:questionId/answers", postAnswer);
module.exports = router;
