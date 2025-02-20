/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import BackToHome from "./BackToHome";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="w-20 h-20 text-4xl font-bold text-white border-4 border-white rounded-md shadow-md 
      bg-black bg-opacity-60 backdrop-blur-lg transition-all duration-300 hover:shadow-[0px_0px_20px_5px_rgba(255,255,255,0.5)]"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({ squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) return;

    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    onPlay(nextSquares);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 gap-2">
        {squares.map((value, i) => (
          <Square key={i} value={value} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
    </div>
  );
}

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);

  useEffect(() => {
    if (winner==="X") {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [winner]);

  useEffect(() => {
    if (!xIsNext && !winner) {
      const timeout = setTimeout(() => {
        const newSquares = squares.slice();
        const bestMove = getBestMove(newSquares);
        if (bestMove !== null) {
          newSquares[bestMove] = "O";
          setSquares(newSquares);
          setXIsNext(true);
        }
      }, 500); 

      return () => clearTimeout(timeout); 
    }
  }, [xIsNext, squares, winner]);

  function handlePlay(nextSquares) {
    setSquares(nextSquares);
    setXIsNext(false);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center text-white relative overflow-hidden pt-12">
      <BackToHome />

      <div className="px-6 py-3 rounded-lg border-2 border-white bg-black bg-opacity-60 backdrop-blur-lg z-10">
        <h1 className="text-4xl font-bold text-white">Tic-Tac-Toe vs PC</h1>
      </div>

      <div className="flex justify-center items-center mt-8 gap-10 z-10">
        <Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay} />
      </div>

      <div className="mt-6 text-2xl bg-black bg-opacity-60 px-6 py-3 rounded-lg border border-white">
        {winner ? ` Ganador: ${winner}` : `Siguiente jugador: ${xIsNext ? "X" : "O"}`}
      </div>

      <button
        onClick={resetGame}
        className="mt-6 px-6 py-3 text-xl font-bold text-white bg-gray-600 hover:bg-red-700 border-2 border-white rounded-lg transition-all duration-300"
      >
        Reiniciar Juego
      </button>
    </div>
  );
}

function getBestMove(squares) {
  for (let [a, b, c] of winningCombinations) {
    if (squares[a] === "O" && squares[b] === "O" && !squares[c]) return c;
    if (squares[a] === "O" && squares[c] === "O" && !squares[b]) return b;
    if (squares[b] === "O" && squares[c] === "O" && !squares[a]) return a;
  }

  for (let [a, b, c] of winningCombinations) {
    if (squares[a] === "X" && squares[b] === "X" && !squares[c]) return c;
    if (squares[a] === "X" && squares[c] === "X" && !squares[b]) return b;
    if (squares[b] === "X" && squares[c] === "X" && !squares[a]) return a;
  }

  if (!squares[4]) return 4;

  const corners = [0, 2, 6, 8].filter((i) => squares[i] === null);
  if (corners.length > 0) return corners[Math.floor(Math.random() * corners.length)];

  return squares.findIndex((val) => val === null);
}

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function calculateWinner(squares) {
  for (let [a, b, c] of winningCombinations) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
