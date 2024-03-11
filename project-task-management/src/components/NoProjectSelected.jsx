import React from "react";
import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

const NoProjectSelected = ({ onStartAddproject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt=""
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        select project or get started with new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddproject}>Create new Project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
