import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/red30-tech-logo.png";

const Header = () => {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);
  return (
    <div className="container">
      <header className="container">
        <img
          src={logo}
          alt="Red30Tech | Home"
          className="logo"
          title="Red30Tech | Home"
        />
        <nav>
          <NavLink className={getClass} to="/">
            Home
          </NavLink>
          <NavLink className={getClass} to="/about">
            About
          </NavLink>
          <NavLink className={getClass} to="/categories">
            categories
          </NavLink>
          <NavLink className={getClass} to="/register">
            Register
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
