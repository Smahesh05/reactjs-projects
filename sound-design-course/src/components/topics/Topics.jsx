import React, { useState } from "react";
import {
  Mixing,
  daw,
  frequencies,
  mastering,
  mixingConsole,
  vocal,
  yellowSide,
} from "../../assets";
import "./Topics.css";

const Topics = () => {
  const [currentImage, setCurrentImage] = useState(frequencies);
  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <h2>What will you learn</h2>
        <div className="content-container">
          <ul className="topic-list">
            <li onMouseEnter={() => setCurrentImage(frequencies)}>
              What are frequencies?
            </li>
            <li onMouseEnter={() => setCurrentImage(daw)}>using DAW</li>
            <li onMouseEnter={() => setCurrentImage(vocal)}>
              Vocal Processing
            </li>
            <li onMouseEnter={() => setCurrentImage(Mixing)}>Mixing</li>
            <li onMouseEnter={() => setCurrentImage(mixingConsole)}>
              Mixing console
            </li>
            <li onMouseEnter={() => setCurrentImage(mastering)}>Mastering</li>
          </ul>

          <div className="topic-image">
            <img src={currentImage} alt="" />
          </div>
        </div>
        <img src={yellowSide} className="bg-element-1" alt="" />
      </div>
    </section>
  );
};

export default Topics;
