import React from "react";

const Card = ({ className, children }) => {
  return (
    <div className={`border-b border-gray-300 py-8 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
