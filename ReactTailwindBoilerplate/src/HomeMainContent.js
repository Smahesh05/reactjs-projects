import React from "react";
import AccountDeletionMessage from "./components/AccountDeletionMessage";
import DataDeletionHistory from "./components/DataDeletionHistory";
import DeleteEventByDateRange from "./components/DeleteEventByDateRange";
import DeleteForm from "./components/DeleteForm";
import DeleteInfo from "./components/DeleteInfo";

const HomeMainContent = () => {
  return (
    <div className="">
      <DeleteInfo />
      <DeleteForm />
      <DeleteEventByDateRange />
      <DataDeletionHistory />
      <AccountDeletionMessage />
    </div>
  );
};

export default HomeMainContent;
