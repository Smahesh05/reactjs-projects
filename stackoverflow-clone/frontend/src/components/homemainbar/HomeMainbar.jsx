import React from "react";
import { Link, useLocation } from "react-router-dom";
import QuestionsList from "../question/QuestionsList";
import "./HomeMainbar.css";

const questionsList = [
  {
    id: 1,
    votes: 3,
    noOfAnswers: 3,
    questionTitle: "what is function",
    questionBody: "It means to be like a function",
    questionTags: ["javascript", "React", "Java", "Node.js"],
    userPosted: "mano",
    askedOn: "jan 1",
  },
];

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
        {questionsList === null ? (
          <h3>Loading....</h3>
        ) : (
          <>
            <QuestionsList questionsList={questionsList} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
