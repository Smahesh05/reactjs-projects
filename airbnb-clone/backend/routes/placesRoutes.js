const express = require("express");
const {
  uploadPhotoByLink,
  uploadPhotoByDevice,
  addPlaces,
  getPlaces,
} = require("../Controllers/placesController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/upload-by-link", uploadPhotoByLink);
router.post("/upload-photo", uploadPhotoByDevice);
router.get("/", protect, getPlaces);
router.post("/add", protect, addPlaces);

module.exports = router;
