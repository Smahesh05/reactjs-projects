import React, { useState } from "react";
import "./Game.css";

const Game = () => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    const newBoard = [...board];
    if (calculateWinner(board) || newBoard[index]) {
      return;
    }
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const handleRestart = () => {
    setBoard(initialBoard);
    setXIsNext(true);
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = `Winner: 🎉${winner}`;
  } else if (board.every((square) => square !== null)) {
    status = "It's a draw! 😥";
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  const gameBoardClassName = winner
    ? "game-board winner-animation"
    : "game-board";

  return (
    <div className="game">
      <div className={gameBoardClassName}>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <button className="restart-button" onClick={handleRestart}>
          Restart Game
        </button>
      </div>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Game;
