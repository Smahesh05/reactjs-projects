const express = require("express");
const {
  registerUser,
  authUser,
  logoutUser,
  updateUserProfile,
} = require("../controller/userController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", registerUser);
router.post("/login", authUser);
router.post("/logout", logoutUser);
router.put("/profile", protect, updateUserProfile);

module.exports = router;
