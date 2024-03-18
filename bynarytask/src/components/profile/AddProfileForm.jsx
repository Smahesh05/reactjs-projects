/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddProfileForm = ({ show, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 1000) + 1,
    name: "",
    contact: "",
    description: "",
    location: "",
    photo: "",
    interests: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInterestChange = (e, index) => {
    const { value } = e.target;
    setFormData((prevData) => {
      const interests = [...prevData.interests];
      interests[index] = value;
      return { ...prevData, interests };
    });
  };

  const handleAddInterest = () => {
    setFormData((prevData) => ({
      ...prevData,
      interests: [...prevData.interests, ""],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    onClose();
  };

  return (
    <div>
      <Modal show={show} onHide={onClose} size="lg" centered>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              className="mb-2"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <Form.Control
              className="mb-2"
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact"
              required
            />
            <Form.Control
              as="textarea"
              rows={3}
              className="mb-2"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
            />
            <Form.Control
              className="mb-2"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
            />
            <Form.Control
              className="mb-2"
              type="text"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              placeholder="Photo URL"
            />
            <>
              {formData.interests.map((interest, index) => (
                <Form.Control
                  className="mb-2"
                  key={index}
                  type="text"
                  value={interest}
                  onChange={(e) => handleInterestChange(e, index)}
                  placeholder="Interest"
                />
              ))}
              <Button
                type="button"
                className="mx-2 ml-0"
                onClick={handleAddInterest}
              >
                Add Interest
              </Button>
            </>
            <Button type="submit">Add Profile</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddProfileForm;
