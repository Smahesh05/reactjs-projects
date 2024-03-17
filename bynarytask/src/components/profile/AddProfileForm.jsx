/* eslint-disable react/prop-types */
import { Modal } from "react-bootstrap";

const AddProfileForm = ({ show, onHide, onAdd }) => {
  return (
    <div>
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Body>Hello</Modal.Body>
      </Modal>
    </div>
  );
};

export default AddProfileForm;
