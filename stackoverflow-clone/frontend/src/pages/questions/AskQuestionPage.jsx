import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../../slices/authSlice";
import { useAskQuestionMutation } from "../../slices/questionApiSlice";
import "./AskQuestion.css";

const AskQuestionPage = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const [askQuestion] = useAskQuestionMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!questionTitle || !questionBody || !questionTags) {
      return alert("Please enter all details");
    }

    try {
      let str = questionTags.split(" ");
      const res = await askQuestion({
        questionTitle,
        questionBody,
        str,
        userPosted: userInfo.result.name,
      }).unwrap();
      dispatch(setCredentials({ ...res }));

      navigate("/questions");
      setQuestionTitle("");
      setQuestionBody("");
      setQuestionTags("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ask-questios">
      <div className="ask-ques-container">
        <h1>Ask a public Question</h1>

        <form onSubmit={submitHandler}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>
                Be specific and imagine you're asking a question to another
                person
              </p>
              <input
                type="text"
                value={questionTitle}
                id="ask-ques-title"
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                name=""
                value={questionBody}
                id="ask-ques-body"
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                onKeyDown={(e) =>
                  e.key === "Enter"
                    ? setQuestionBody(questionBody + "\n")
                    : null
                }
              ></textarea>
            </label>
            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type="text"
                value={questionTags}
                id="ask-ques-tags"
                onChange={(e) => setQuestionTags(e.target.value)}
                placeholder="e.g. (xml typescript wordpress)"
              />
            </label>
          </div>
          <button className="review-btn">Review your question</button>
        </form>
      </div>
    </div>
  );
};

export default AskQuestionPage;
