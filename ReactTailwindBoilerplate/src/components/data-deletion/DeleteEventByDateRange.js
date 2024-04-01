import React, { useState } from "react";
import Button from "../UIElements/Button";
import Card from "../UIElements/Card";

const DeleteEventByDateRange = () => {
  const [inputField, setInputField] = useState("");

  const deleteOnTimePeriodHandler = (e) => {
    e.preventDefault();
    setInputField("");
  };

  return (
    <Card>
      <h4 className="font-bold ">Delete information within period of time</h4>
      <p className="py-2">
        choose the data range to delete all information from scheduled events
        within that period of time
      </p>
      <div className="flex flex-col md:flex-row items-center mt-2">
        <input
          value={inputField}
          onChange={(e) => setInputField(e.target.value)}
          className="mb-2 md:mb-0 md:mr-2 px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Select the date range"
        />
        <Button onClick={deleteOnTimePeriodHandler}>Delete</Button>
      </div>
    </Card>
  );
};

export default DeleteEventByDateRange;
