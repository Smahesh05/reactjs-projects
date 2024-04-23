import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Avatar from "./UIElements/Avatar";

import "./Navbar.css";

function Navbar() {
  const user = null;
  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="nav-btn nav-logo">
          <img src={logo} alt="Logo" />
        </Link>
        <Link to="/" className="nav-btn nav-item">
          About
        </Link>
        <Link to="/" className="nav-btn nav-item">
          Products
        </Link>
        <Link to="/" className="nav-btn nav-item">
          For Teams
        </Link>

        <form>
          <input type="text" placeholder="search.." />
          <FaSearch className="search-icon" />
        </form>
        {user === null ? (
          <Link to="/auth" className="nav-item nav-links">
            Log in
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px="10px"
              py="7px"
              borderRadius="50%"
              color="white"
            >
              <Link to="/users">User.result.name.charAt0.toUpperCase</Link>
            </Avatar>
            <button
              className="nav-item nav-links"
              //  onClick={handleLogout}
            >
              Log out
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
