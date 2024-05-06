import React from "react";
import { redSide, student, videoIcon } from "../../assets";
import "./Info.css";

const Info = () => {
  return (
    <section id="info" className="dark-gray">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img src={student} alt="" />
            <div className="amount">23,000</div>
            <div className="type">Students</div>
          </div>

          <div className="info-content">
            <img src={videoIcon} alt="" />
            <div className="amount">26 Hrs</div>
            <div className="type">Video COntent</div>
          </div>
        </div>

        <img src={redSide} alt="redSide background" className="bg-element-2" />
      </div>
    </section>
  );
};

export default Info;
