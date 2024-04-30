import React from "react";
import { Link } from "react-router-dom";

const QuestionItem = ({ question }) => {
  return (
    <div className="display-question-container">
      <div className="display-votes-ans">
        <p>{question.votes}</p>
        <p>{question.votes === 1 ? "Vote" : "Votes"}</p>
      </div>
      <div className="display-votes-ans">
        <p>{question.noOfAnswers}</p>
        <p>{question.noOfAnswers === 1 ? "answer" : "answers"}</p>
      </div>
      <div className="display-question-details">
        <Link to={`/questions/${question._id}`} className="question-title-link">
          {question.questionTitle}
        </Link>
        <div className="display-tags-time">
          <div className="display-tags">
            {question.questionTags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
          <p className="display-time">asked by @{question.userPosted}</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
