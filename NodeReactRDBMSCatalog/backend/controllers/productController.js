const db = require("../config/db");

const getProducts = async (req, res) => {
  try {
    const data = await db.query(`SELECT * from products;`);
    res.status(202).json({ data: data[0] });
  } catch (err) {
    res.status(500).json({
      message: "error",
      err,
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const { categoryId, productName } = req.body;

    const [[category]] = await db.query(
      `SELECT categoryId, categoryName FROM categories WHERE categoryId = ?`,
      [categoryId]
    );

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    const [{ insertId: productId }] = await db.query(
      `INSERT INTO products (categoryId, productName) VALUES (?, ?)`,
      [category.categoryId, productName]
    );

    const productData = {
      productId,
      productName,
      categoryName: category.categoryName,
    };

    res
      .status(201)
      .json({ message: "Product created successfully", data: productData });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateProduct = async (req, res) => {
  await res.send({ message: "Hello from get category" });
};

const deleteProduct = async (req, res) => {
  await res.send({ message: "Hello from get category" });
};

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
