import React from "react";

const DeleteEventByDateRange = () => {
  return (
    <div className="border-b border-gray-300 py-8">
      <h4 className="font-bold ">Delete information within period of time</h4>
      <p className="py-2">
        choose the data range to delete all information from scheduled events
        within that period of time
      </p>
      <div className="flex flex-col md:flex-row items-center mt-2">
        <input
          className="mb-2 md:mb-0 md:mr-2 px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Select the date range"
        />
        <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none">
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteEventByDateRange;
