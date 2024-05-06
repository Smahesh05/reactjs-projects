import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <nav>
        <a href="#" className="logo">
          Sound<span className="red">DZing</span>
        </a>

        <ul>
          <li>
            <a href="#topics">About</a>
          </li>
          <li>
            <a href="#info">Course Details</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>

        <div className="menu-icon" onClick={() => setIsActive(true)}>
          <GiHamburgerMenu />
        </div>
      </nav>

      <div className={`mobile-menu-container ${isActive ? "active" : ""}`}>
        <div className="close-btn" onClick={() => setIsActive(false)}>
          <CgClose />
        </div>

        <ul className="menu-items" onClick={() => setIsActive(false)}>
          <li>
            <a href="#info">About</a>
          </li>
          <li>
            <a href="#topics">Course Details</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
