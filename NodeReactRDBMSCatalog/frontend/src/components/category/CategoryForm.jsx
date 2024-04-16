// CategoryForm.js
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const CategoryForm = ({ onSubmit }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(categoryName);
    setCategoryName("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        placeholder="Category Name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default CategoryForm;
