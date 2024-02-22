const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getMe,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const routes = express.Router();

routes.post("/", registerUser);
routes.post("/login", loginUser);
routes.post("/logout", logoutUser);
routes.get("/profile", protect, getMe);

module.exports = routes;
