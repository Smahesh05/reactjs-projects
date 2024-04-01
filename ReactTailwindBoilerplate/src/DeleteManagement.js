import React from "react";
import AccountDeletionMessage from "./components/data-deletion/AccountDeletionMessage";
import DataDeletionHistory from "./components/data-deletion/DataDeletionHistory";
import DeleteEventByDateRange from "./components/data-deletion/DeleteEventByDateRange";
import DeleteForm from "./components/data-deletion/DeleteForm";
import DeleteInfo from "./components/data-deletion/DeleteInfo";

const DeleteManagement = () => {
  return (
    <>
      <div className="flex-grow max-w-3xl pt-8 px-2">
        <DeleteInfo />
        <DeleteForm />
        <DeleteEventByDateRange />
        <DataDeletionHistory />
        <AccountDeletionMessage />
      </div>
    </>
  );
};

export default DeleteManagement;
