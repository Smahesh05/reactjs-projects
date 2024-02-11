const express = require("express");
const {
  loginUser,
  registerUser,
  getMe,
  logoutUser,
} = require("../Controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", registerUser);
router.get("/profile", protect, getMe);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

module.exports = router;
