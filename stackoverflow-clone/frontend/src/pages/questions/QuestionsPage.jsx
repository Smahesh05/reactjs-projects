import React from "react";
import HomeMainbar from "../../components/homemainbar/HomeMainbar";
import LeftSidebar from "../../components/sidebar/LeftSidebar";
import RightSidebar from "../../components/sidebar/RightSidebar";

function QuestionsPage() {
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  );
}

export default QuestionsPage;
