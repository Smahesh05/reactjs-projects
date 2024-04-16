import React from "react";
import { Button } from "react-bootstrap";

const CategoryItem = ({ category, onDelete, onUpdate }) => {
  return (
    <li>
      <div className="p-2 border">
        <p>{category.categoryName}</p>
        <div className="d-flex gap-2 ">
          <Button size="sm" onClick={() => onDelete(category.categoryId)}>
            Delete
          </Button>
          <Button size="sm" onClick={() => onUpdate(category.categoryId)}>
            Update
          </Button>
        </div>
      </div>
    </li>
  );
};

export default CategoryItem;
