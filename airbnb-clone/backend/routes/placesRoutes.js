const express = require("express");
const {
  uploadPhotoByLink,
  uploadPhotoByDevice,
  addPlaces,
} = require("../Controllers/placesController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/upload-by-link", uploadPhotoByLink);
router.post("/upload-photo", uploadPhotoByDevice);
router.post("/", protect, addPlaces);

module.exports = router;
