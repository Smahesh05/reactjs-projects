/* eslint-disable react/prop-types */
const Question = ({ question, onAnswerClick }) => {
  return (
    <div className="question">
      <h3>{question.question}</h3>
      <ul className="options">
        {question.answerOptions.map((option, idx) => (
          <li key={idx}>
            <button onClick={() => onAnswerClick(option.isCorrect)}>
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
