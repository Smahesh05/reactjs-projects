import React from "react";
import { Form } from "react-bootstrap";

function WidgetForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div>
      <Form>
        <Form.Control
          value={title}
          type="text"
          placeholder="Widget Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Form.Control
          type="text"
          placeholder="Widget Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <Button type="submit">Add Widget</Button>
      </Form>
    </div>
  );
}

export default WidgetForm;
