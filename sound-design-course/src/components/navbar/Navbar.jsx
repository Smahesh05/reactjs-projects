import React from "react";
import { CgClose } from "react-icons/cg";
import { FaHamburger } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <a href="#" className="logo">
          Sound<span className="red">DZing</span>
        </a>

        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Course Details</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
        </ul>

        <div className="menu-icon">
          <FaHamburger />
        </div>
      </nav>

      <div className="mobile-menu-container">
        <div className="close-btn">
          <CgClose />
        </div>

        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Course Details</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
