import React, { useState } from "react";
import Button from "../UIElements/Button";
import Card from "../UIElements/Card";

const DeleteForm = () => {
  const [inputField, setInputField] = useState("");

  const deleteByInviteHandler = (e) => {
    e.preventDefault();
    setInputField("");
  };

  return (
    <Card>
      <h4 className="font-bold">Delete information from specific invitees</h4>
      <p className="py-2">
        Enter an invitee's email to delete all of their personally identifiable
        information from your organization and integrations. During the data
        deletion process, Calendly removes the deleted invitee from their spot
        on group events and cancels both pending and upcoming events with them.
      </p>

      <div className="mt-2 ">
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 mb-2 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500    dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputField}
          onChange={(e) => setInputField(e.target.value)}
        ></textarea>
        <Button onClick={deleteByInviteHandler}>Delete</Button>
      </div>
    </Card>
  );
};

export default DeleteForm;
