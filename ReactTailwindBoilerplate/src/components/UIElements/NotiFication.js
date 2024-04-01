import React from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const NotiFication = () => {
  return (
    <div className="fixed mt-2 top-0 left-0 w-full  flex items-center justify-center">
      <div className="bg-emerald-600 p-2 text-white rounded shadow-md mx-auto flex items-center  text-center">
        <IoCheckmarkCircleSharp />
        <p>Your settings have been saved!</p>
      </div>
    </div>
  );
};

export default NotiFication;
