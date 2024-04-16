import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

const initialProducts = [
  { product_id: 1, product_name: "Laptop", category_id: 1 },
  { product_id: 2, product_name: "T-Shirt", category_id: 2 },
  { product_id: 3, product_name: "Smartphone", category_id: 1 },
];

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(initialProducts);
  });

  const handleProductDelete = (productId) => {
    console.log(productId);
  };

  const handleProductUpdate = (productId) => {
    console.log(productId);
  };

  return (
    <div>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Category ID</th>
            <th>Category Name</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.product_id}>
              <td>{product.product_id}</td>
              <td>{product.product_name}</td>
              <td>{product.category_id}</td>
              <td>{product.category_name}</td>
              <td>
                <Button onClick={() => handleProductDelete(product.product_id)}>
                  Delete
                </Button>
                <Button onClick={() => handleProductUpdate(product.product_id)}>
                  Update
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
