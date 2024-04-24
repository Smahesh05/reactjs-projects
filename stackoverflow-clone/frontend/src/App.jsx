import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MainLayout from "./pages/MainLayout";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import AskQuestionPage from "./pages/questions/AskQuestionPage";
import QuestionsPage from "./pages/questions/QuestionsPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/askquestion" element={<AskQuestionPage />} />
      </Routes>
    </div>
  );
}

export default App;
