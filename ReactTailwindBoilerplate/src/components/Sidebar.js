import React from "react";

const Sidebar = () => {
  return (
    <div className="sticky top-0  w-64">
      <ul className="mt-8">
        <li className="text-black px-4 pb-2 pt-0">Shared event types</li>
        <li className="text-black px-4 py-2">Single sign-on</li>
        <li className="text-black px-4 py-2">Workflows</li>
        <li className="text-black font-bold px-4 py-2">Data deletion</li>
      </ul>
    </div>
  );
};

export default Sidebar;
