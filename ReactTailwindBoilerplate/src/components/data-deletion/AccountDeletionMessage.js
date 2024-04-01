import React from "react";
import Card from "../UIElements/Card";

const AccountDeletionMessage = () => {
  return (
    <Card>
      <h2 className="font-bold  text-sm">Delete your account</h2>
      <p>
        You can delete your account from your{" "}
        <a href="/" className="text-blue-500">
          account settings
        </a>
      </p>
    </Card>
  );
};

export default AccountDeletionMessage;
