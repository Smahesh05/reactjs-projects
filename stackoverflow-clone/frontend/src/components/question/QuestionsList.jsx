import React from "react";
import QuestionItem from "./QuestionItem";

const QuestionsList = ({ QUESTIONLIST }) => {
  return (
    <>
      {QUESTIONLIST.map((question) => (
        <QuestionItem question={question} key={question._id} />
      ))}
    </>
  );
};

export default QuestionsList;
