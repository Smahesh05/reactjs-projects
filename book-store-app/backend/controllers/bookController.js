const Book = require("../model/bookModel");

// get all books from the database
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ count: books.length, data: books });
  } catch (err) {
    res.status(404).json({ message: "Book not founds" });
  }
};

// create a new book
const postBookRequest = async (req, res) => {
  try {
    const { title, author, publishYear, genre } = req.body;

    if (!title || !author || !publishYear || !genre) {
      return res.status(404).send({ message: "send all required fields" });
    }

    const bookExists = await Book.findOne({
      title,
    });

    if (bookExists) {
      res.status(400).send({ message: "book already exists" });
    } else {
      const newBook = {
        title,
        author,
        publishYear,
        genre,
      };

      const book = await Book.create(newBook);
      res.status(201).send({ book });
    }
  } catch (error) {
    res.status(404).send({ message: "send all required fields" });
  }
};

// Get One book from the database by ID
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    res.status(404).send({ message: "book not found" });
  }
};

//  update a book in the database with the help of id
const updateBookById = async (req, res) => {
  try {
    const { title, author, publishYear, genre } = req.body;

    if (!title || !author || !publishYear || !genre) {
      return res.status(404).send({ message: "send all required fields" });
    }

    const book = await Book.findByIdAndUpdate(req.params.id, req.body);

    if (!book) {
      res.status(404).send({ message: "Book not found" });
    }

    res.status(200).json({ message: "book updated successfully :) ", book });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};

// delete a book from the database by id
const deleteBookById = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "book deleted successfully!!!" });
  } catch (error) {
    res.status(404).send({ message: "book not found" });
  }
};

module.exports = {
  getAllBooks,
  postBookRequest,
  getBookById,
  deleteBookById,
  updateBookById,
};
