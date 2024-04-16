import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

const initialCategories = [
  { category_id: 1, category_name: "Electronics" },
  { category_id: 2, category_name: "Clothing" },
  { category_id: 3, category_name: "Books" },
];

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(initialCategories);
  }, []);

  const handleDeleteCategory = (category) => {
    console.log(`Deleting category with ID ${category}`);
  };

  const handleUpdateCategory = (category) => {
    console.log(`updating category with ID ${category}`);
  };

  return (
    <div>
      <h2>Category List</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.category_id}>
            {category.category_name}
            <Button onClick={() => handleDeleteCategory(category.category_id)}>
              Delete
            </Button>
            <Button
              onClick={() => handleUpdateCategory(category.category_id)}
            ></Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
