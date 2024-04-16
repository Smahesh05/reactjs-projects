const db = require("../config/db");

const getProducts = async (req, res) => {
  try {
    const [products] = await db.query(
      `
      SELECT
        p.productId,
        p.productName,
        p.categoryId,
        c.categoryName
      FROM
        products p
      JOIN
        categories c ON p.categoryId = c.categoryId
      `
    );

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching products" });
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
  try {
    const { id: productId } = req.params;

    if (!productId) {
      return res
        .status(404)
        .send({ success: false, message: "Invalid product Id" });
    }

    const { productName } = req.body;

    const [[product]] = await db.query(
      `SELECT * FROM products WHERE productId = ?`,
      [productId]
    );

    if (!product) {
      return res
        .status(500)
        .send({ success: false, message: "Error in update data" });
    }

    const [{ affectedRows }] = await db.query(
      `UPDATE products SET productName = ? WHERE productId = ?`,
      [productName, productId]
    );

    if (affectedRows === 0) {
      return res
        .status(500)
        .json({ success: false, message: "Error updating product" });
    }

    res.status(200).send({
      success: true,
      message: "product updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error updating product",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id: productId } = req.params;

    if (!productId) {
      return res.status(404).send({
        success: false,
        message: "product not found",
      });
    }

    await db.query(`DELETE FROM products WHERE productId = ?`, [productId]);

    res.status(200).send({
      success: true,
      message: "product deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error deleting product",
      error,
    });
  }
};
module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
