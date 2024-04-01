import React from "react";
import Card from "./Card";

const DeleteForm = () => {
  return (
    <Card>
      <h4 className="font-bold">Delete information from specific invitees</h4>
      <p className="py-2">
        Enter an invitee's email to delete all of their personally identifiable
        information from your organization and integrations. During the data
        deletion process, Calendly removes the deleted invitee from their spot
        on group events and cancels both pending and upcoming events with them.
      </p>

      <div className="mt-2">
        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500    dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></textarea>
        <button className="bg-red-500 mt-2 px-6 py-2 rounded-md text-white">
          Delete
        </button>
      </div>
    </Card>
  );
};

export default DeleteForm;
