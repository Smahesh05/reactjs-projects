import React from "react";

const AccountDeletionMessage = () => {
  return (
    <div className="py-8 border-b border-gray-300">
      <h2 className="font-bold  text-sm">Delete your account</h2>
      <p>
        You can delete your account from your{" "}
        <a href="/" className="text-blue-500">
          account settings
        </a>
      </p>
    </div>
  );
};

export default AccountDeletionMessage;
