const express = require("express");
const {
  uploadPhotoByLink,
  uploadPhotoByDevice,
  addPlaces,

  getPlaceById,
  getMyPlaces,
  getAllPlaces,
  bookPlaceByPlaceId,
} = require("../Controllers/placesController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/get", getAllPlaces);
router.get("/:id", getPlaceById);
router.post("/upload-by-link", uploadPhotoByLink);
router.post("/upload-photo", uploadPhotoByDevice);
router.get("/user-places", protect, getMyPlaces);
router.post("/add", protect, addPlaces);
router.post("/book-place", protect, bookPlaceByPlaceId);

module.exports = router;
