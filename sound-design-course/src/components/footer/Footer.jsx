import React from "react";
import { InstagramLogo, facebookLogo, twitterLogo } from "../../assets";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="black" id="footer">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className="logo">
              Sound<span className="red">DZign</span>
            </a>

            <div className="social-icons">
              <a href="#">
                <img src={facebookLogo} alt="" />
              </a>
              <a href="">
                <img src={InstagramLogo} alt="" />
              </a>
              <a href="">
                <img src={twitterLogo} alt="" />
              </a>
            </div>

            <div className="copyright">
              This website designed by github@Smahesh05 &#169;{" "}
              {new Date().getFullYear()}
            </div>

            <div className="links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="links">
              <h3>Contact US</h3>
              <ul>
                <li>
                  <a href="#">mahesh@gmail.com</a>
                </li>
                <li>
                  <a href="#">1234567890</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright mobile">
            This website designed by github@Smahesh05 &#169;{" "}
            {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
