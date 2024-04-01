import React from "react";

const DeleteInfo = () => {
  return (
    <div className="border-b border-gray-300 pb-8 ">
      <div>
        <h2 className="font-bold">Delete Info from your organizaion</h2>
        <p className="py-2">
          When anyone in your organization schedules an event with an invitee,
          information about the event and everyone part of it is saved in
          Calendly. If you need to delete this information from Calendly and its
          vendors for compliance reasons, you can do so without contacting
          support.
        </p>
      </div>
      <h2 className="p-4 font-bold mt-3 mb-5" style={{ background: "#fef2f4" }}>
        Once you Delete information, you won't be able to recover it.
      </h2>

      <p className="mb-4">
        Invitee data will be deleted <span className="font-bold">7 days</span>{" "}
        from the date you make the request.
      </p>
    </div>
  );
};

export default DeleteInfo;
