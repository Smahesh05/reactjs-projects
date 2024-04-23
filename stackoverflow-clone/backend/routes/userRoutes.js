const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.send({ message: "Get Request" });
});

module.exports = route;
