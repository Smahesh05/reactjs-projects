const express = require("express");
const {
  askQuestion,

  getAnswers,
} = require("../controllers/questionController");

const route = express.Router();

route.post("/ask", askQuestion);
route.get("/", getAnswers);
module.exports = route;
