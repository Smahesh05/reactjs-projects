import React from "react";

const Button = ({ onClick, children, className }) => {
  return (
    <button
      className={`px-4 py-2 bg-red-700 rounded-full hover:bg-red-500   text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
