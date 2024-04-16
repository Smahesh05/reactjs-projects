import React from "react";
import { Button } from "react-bootstrap";

const ProductItem = ({ product, onDelete, onUpdate }) => {
  return (
    <li className="border p-2 rounded">
      <h3>{product.productName}</h3>
      <p>{product.categoryName}</p>
      <div className="d-flex gap-2">
        <Button size="sm" onClick={() => onDelete(product.productId)}>
          Delete
        </Button>
        <Button size="sm" onClick={() => onUpdate(product.productId)}>
          Update
        </Button>
      </div>
    </li>
  );
};

export default ProductItem;
