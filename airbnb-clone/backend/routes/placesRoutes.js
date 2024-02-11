const express = require("express");
const { uploadPhotoByLink } = require("../Controllers/placesController");

const router = express.Router();

router.post("/upload-by-link", uploadPhotoByLink);

module.exports = router;
