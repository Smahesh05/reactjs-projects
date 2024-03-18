/* eslint-disable react/prop-types */
import { useState } from "react";
import { Form, Modal } from "react-bootstrap";

const EditProfileForm = ({ profile, onUpdate, showModal, onClose }) => {
  const [formData, setFormData] = useState({
    name: profile.name,
    contact: profile.contact,
    description: profile.description,
    location: profile.location,
    photo: profile.photo,
    interests: profile.interests,
  });

  console.log(profile);

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
    onUpdate(formData);

    onClose();
  };

  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <Form.Control
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          />
          <Form.Control
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
          />
          <Form.Control
            type="text"
            name="photo"
            value={formData.photo}
            onChange={handleChange}
            placeholder="Photo URL"
          />
          <div>
            {formData.interests.map((interest, index) => (
              <Form.Control
                key={index}
                type="text"
                value={interest}
                onChange={(e) => handleInterestChange(e, index)}
                placeholder="Interest"
              />
            ))}
            <button type="button" onClick={handleAddInterest}>
              Add Interest
            </button>
          </div>
          <button type="submit">Update Profile</button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditProfileForm;
