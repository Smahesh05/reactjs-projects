import React from "react";

const Sidebar = ({ activeLink, setActiveLink }) => {
  return (
    <div className="sticky top-0  w-64">
      <ul className="mt-8">
        <li className="text-black px-4 pb-2 pt-0">
          <a
            href="#"
            className={activeLink === "shared" ? "font-bold" : ""}
            onClick={() => setActiveLink("shared")}
          >
            Shared event types
          </a>
        </li>
        <li className="text-black px-4 py-2">
          <a
            href="#"
            className={activeLink === "sso" ? "font-bold" : ""}
            onClick={() => setActiveLink("sso")}
          >
            Single sign-on
          </a>
        </li>
        <li className="text-black px-4 py-2">
          <a
            href="#"
            className={activeLink === "workflows" ? "font-bold" : ""}
            onClick={() => setActiveLink("workflows")}
          >
            Workflows
          </a>
        </li>
        <li className="text-black  px-4 py-2">
          <a
            href="#"
            className={activeLink === "dataDeletion" ? "font-bold" : ""}
            onClick={() => setActiveLink("dataDeletion")}
          >
            Data deletion
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
