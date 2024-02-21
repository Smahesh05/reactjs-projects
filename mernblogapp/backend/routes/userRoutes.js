const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
} = require("../controllers/userController");

const routes = express.Router();

routes.post("/", registerUser);
routes.post("/login", loginUser);
routes.post("/logout", logout);

module.exports = routes;
