import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../components/UIElements/Avatar";

const DisplayAnswer = ({ question }) => {
  return (
    <div>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className="question-actions-user">
            <button>Share</button>
            <button>Delete</button>
          </div>
          <div>
            <p>answered on {ans.answeredOn}</p>
            <Link
              to={`/user/${ans.userId}`}
              className="user-link"
              style={{ color: "#0086d8" }}
            >
              <Avatar
                backgroundColor="orange"
                px="8px"
                py="5px"
                borderRadius="4px"
              >
                {ans.userAnswered.charAt(0).toUpperCase()}
              </Avatar>
              <div className="">{ans.userAnswered}</div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
