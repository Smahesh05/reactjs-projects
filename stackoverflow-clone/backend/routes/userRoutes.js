const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const route = express.Router();

route.post("/login", loginUser);
route.post("/", registerUser);

module.exports = route;
