const db = require("../config/db");

const getCategories = async (req, res) => {
  try {
    const data = await db.query(`SELECT *  from categories;`);
    res.status(202).json({ data: data[0] });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
};

const createCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;

    const [{ insertId }] = await db.query(
      `INSERT INTO categories (categoryName) 
          VALUES (?)`,
      [categoryName]
    );
    res
      .status(201)
      .json({ message: "Category created successfully", categoryName });
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    if (!categoryId) {
      return res
        .status(404)
        .send({ success: false, message: "Invalid category Id" });
    }

    const { categoryName } = req.body;

    const data = await db.query(
      `UPDATE categories SET categoryName = ? WHERE categoryId = ?`,
      [categoryName]
    );

    if (!data) {
      return res
        .status(500)
        .send({ success: false, message: "Error in update data" });
    }

    res.status(200).send({
      success: true,
      message: "data updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error updating category",
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;

    if (!categoryId) {
      return res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }

    await db.query(`DELETE FROM categories WHERE categoryId = ?`, [categoryId]);

    res.status(200).send({
      success: true,
      message: "Category deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error deleting category",
      error,
    });
  }
};

module.exports = {
  getCategories,
  updateCategory,
  deleteCategory,
  createCategory,
};
