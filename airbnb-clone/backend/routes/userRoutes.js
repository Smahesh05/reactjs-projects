const express = require("express");
const {
  loginUser,
  registerUser,
  getMe,
} = require("../Controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", registerUser);
router.get("/profile", protect, getMe);
router.post("/login", loginUser);

module.exports = router;
