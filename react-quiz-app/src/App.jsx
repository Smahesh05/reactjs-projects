import { useState } from "react";
import "./App.css";
import Question from "./components/Question";
import Result from "./components/Result";
import questions from "./components/data.json";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const onAnswerClick = (isCorrect) => {
    setCurrentQuestion((prev) => prev + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  return (
    <div className="container">
      <h3>World Quiz</h3>
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={onAnswerClick}
        />
      ) : (
        <Result
          userAnswers={userAnswers}
          questions={questions}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
};

export default App;
