/* eslint-disable react/prop-types */

const Result = ({ resetQuiz = () => {}, questions, userAnswers }) => {
  const correctAnswer = userAnswers.filter((ans) => ans).length;

  return (
    <div className="result">
      <h2>Result</h2>
      <p>
        You answered {correctAnswer} out of {questions.length}
        <span onClick={resetQuiz}>Click here to retry</span>
      </p>
    </div>
  );
};

export default Result;
