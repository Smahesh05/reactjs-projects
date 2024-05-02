import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Avatar from "./UIElements/Avatar";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/userApiSlice";
import "./Navbar.css";

function Navbar() {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/auth");
    } catch (err) {
      console.error(err);
    }
  };

  const user = userInfo;
  return (
    <nav className="main-nav">
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
              <Link to={`/users/${user?.result?._id}`}>
                {user.result.name.charAt(0).toUpperCase()}
              </Link>
            </Avatar>
            <button className="nav-item nav-links" onClick={logoutHandler}>
              Log out
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
