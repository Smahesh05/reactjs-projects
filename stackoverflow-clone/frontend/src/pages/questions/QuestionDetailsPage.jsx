import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import QUESTIONLIST from "../../QUESTIONLIST.json";

import "./QuestionDetails.css";

import downVote from "../../assets/sort-down.svg";
import upvote from "../../assets/sort-up.svg";
import Avatar from "../../components/UIElements/Avatar";
import DisplayAnswer from "./DisplayAnswer";

function QuestionDetailsPage() {
  const [Answer, setAnswer] = useState("");
  const { id } = useParams();

  return (
    <div className="question-details-page">
      {QUESTIONLIST === null ? (
        <h1>Loading....</h1>
      ) : (
        <>
          {QUESTIONLIST.filter((question) => question._id === id).map(
            (question) => (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img
                        src={upvote}
                        alt=""
                        width="18"
                        className="votes-icon"
                        // onClick={handleUpVote}
                      />
                      <p>{question.upVotes - question.downVotes}</p>
                      <img
                        src={downVote}
                        alt=""
                        width="18"
                        className="votes-icon"
                        // onClick={handleDownVote}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div className="">
                          <button>Share</button>
                          <button>Delete</button>
                        </div>
                        <div>
                          <p>asked {question.askedOn}</p>
                          <Link
                            to={`/user/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar
                              backgroundColor="orange"
                              px="8px"
                              py="5px"
                              borderRadius="4px"
                            >
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} answers</h3>
                    <DisplayAnswer key={question._id} question={question} />
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      value={Answer}
                      onChange={(e) => setAnswer(e.target.value)}
                    ></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                  <p>
                    {" "}
                    Browse other Question tagged
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags">
                        {tag}
                      </Link>
                    ))}
                    or
                    <Link
                      to="/askquestion"
                      style={{
                        textDecoration: "none",
                        color: "#009dff",
                        marginLeft: "10px",
                      }}
                    >
                      ask your own question.
                    </Link>
                  </p>
                </section>
              </div>
            )
          )}
        </>
      )}
    </div>
  );
}

export default QuestionDetailsPage;
