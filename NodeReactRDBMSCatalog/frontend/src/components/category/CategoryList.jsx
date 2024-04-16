import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ onDelete, onUpdate }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/categories"
        );
        setCategories(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <Container>
        <ul className="d-flex flex-wrap p-2 gap-2">
          {categories.map((category) => (
            <CategoryItem
              category={category}
              key={category.categoryId}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
        </ul>
        <Pagination size="sm">1</Pagination>
      </Container>
    </div>
  );
};

export default CategoryList;
