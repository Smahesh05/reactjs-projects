const express = require("express");
const { askQuestion } = require("../controllers/questionController");

const route = express.Router();

route.post("/ask", askQuestion);

module.exports = route;
