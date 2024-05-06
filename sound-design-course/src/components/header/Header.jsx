import React from "react";
import Navbar from "../navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Navbar />
        <div className="cta">
          <p className="course-name">Sound Design masterclass</p>
          <h1>Learn the art of sound Design</h1>
          <a href="#" className="demo-btn">
            Demo Lesson
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
