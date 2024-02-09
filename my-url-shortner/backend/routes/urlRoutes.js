const express = require("express");
const {
  getSingleUrl,

  getAllUrls,
  deleteShortUrl,
  updateShortUrl,
  createUrl,
} = require("../controller/urlController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getAllUrls).post(protect, createUrl);
router.get("/:shortUrl", getSingleUrl);
router.delete("/:id", deleteShortUrl);
router.put("/:id", updateShortUrl);

module.exports = router;
