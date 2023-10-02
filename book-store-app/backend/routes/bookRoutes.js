const express = require("express");
const {
  getAllBooks,
  postBookRequest,
  getBookById,
  deleteBookById,
  updateBookById,
} = require("../controllers/bookController");
const router = express.Router();

router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.delete("/:id", deleteBookById);
router.put("/:id", updateBookById);
router.post("/", postBookRequest);

module.exports = router;
