import React from "react";
import { Link, useLocation } from "react-router-dom";
import QUESTIONLIST from "../../QUESTIONLIST.json";
import QuestionsList from "../question/QuestionsList";
import "./HomeMainbar.css";

const HomeMainbar = () => {
  const location = useLocation();

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <Link to="/askquestion" className="ask-btn">
          Ask Question
        </Link>
      </div>
      <div className="">
        {QUESTIONLIST === null ? (
          <h3>Loading....</h3>
        ) : (
          <>
            <QuestionsList QUESTIONLIST={QUESTIONLIST} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
