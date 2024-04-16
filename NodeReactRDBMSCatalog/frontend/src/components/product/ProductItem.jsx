import React from "react";
import { Button } from "react-bootstrap";

const ProductItem = ({ product, onDelete, onUpdate }) => {
  return (
    <li>
      <h3>{product.productName}</h3>
      <p>{product.categoryName}</p>
      <div>
        <Button onClick={() => onDelete(product.productId)}>Delete</Button>
        <Button onClick={() => onUpdate(product.productId)}>Update</Button>
      </div>
    </li>
  );
};

export default ProductItem;
