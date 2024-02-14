const express = require("express");
const {
  uploadPhotoByLink,
  uploadPhotoByDevice,
  addPlaces,

  getPlaceById,
  getMyPlaces,
  getAllPlaces,
} = require("../Controllers/placesController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/get", getAllPlaces);
router.post("/upload-by-link", uploadPhotoByLink);
router.post("/upload-photo", uploadPhotoByDevice);
router.get("/user-places", protect, getMyPlaces);
router.post("/add", protect, addPlaces);
router.get("/:id", getPlaceById);

module.exports = router;
