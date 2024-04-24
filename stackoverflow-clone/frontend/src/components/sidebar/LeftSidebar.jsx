import React from "react";
import { NavLink } from "react-router-dom";
import "./LeftSidebar.css";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <NavLink to="/" className="side-nav-links" activeclassname="active">
          <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <NavLink
            to="/questions"
            className="side-nav-links"
            activeclassname="active"
          >
            <p>Questions</p>
          </NavLink>
          <NavLink
            to="/tags"
            className="side-nav-links"
            activeclassname="active"
          >
            <p>Tags</p>
          </NavLink>
          <NavLink
            to="/tags"
            className="side-nav-links"
            activeclassname="active"
          >
            <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
