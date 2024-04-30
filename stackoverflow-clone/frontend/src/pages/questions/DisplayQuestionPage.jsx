import React from "react";
import LeftSidebar from "../../components/sidebar/LeftSidebar";
import RightSidebar from "../../components/sidebar/RightSidebar";
import QuestionDetailsPage from "./QuestionDetailsPage";

function DisplayQuestionPage() {
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <QuestionDetailsPage />
        <RightSidebar />
      </div>
    </div>
  );
}

export default DisplayQuestionPage;
