import React, { useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal.jsx";

const NewProject = ({ onAdd, onCancel }) => {
  const modalRef = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops. looks like you forget to enter value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <Button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </Button>
          </li>
          <li>
            <Button
              onClick={handleSave}
              className="px-6 py-2 bg-stone-800 rounded text-stone-50 hover:bg-stone-950"
            >
              Save
            </Button>
          </li>
        </menu>
        <div>
          <Input ref={title} type="text" label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input ref={dueDate} type="Date" label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
