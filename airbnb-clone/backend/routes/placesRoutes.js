const express = require("express");
const {
  uploadPhotoByLink,
  uploadPhotoByDevice,
  addPlaces,
  getPlaces,
  getPlaceById,
} = require("../Controllers/placesController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/upload-by-link", uploadPhotoByLink);
router.post("/upload-photo", uploadPhotoByDevice);
router.get("/", protect, getPlaces);
router.post("/add", protect, addPlaces);
router.get("/:id", protect, getPlaceById);

module.exports = router;
