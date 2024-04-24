import React from "react";
import QuestionItem from "./QuestionItem";

const QuestionsList = ({ questionsList }) => {
  return (
    <>
      {questionsList.map((question) => (
        <QuestionItem question={question} key={question.id} />
      ))}
    </>
  );
};

export default QuestionsList;
