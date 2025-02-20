/* eslint-disable react/prop-types */
import { useState } from "react";
import BackToHome from "../components/BackToHome";
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

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status = winner ? `Ganador: ${winner}` : `Siguiente jugador: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="flex flex-col items-center">
      <div className="text-white text-2xl mb-6 bg-black bg-opacity-60 backdrop-blur-lg px-4 py-2 rounded-lg border border-white">
        {status}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {squares.map((value, i) => (
          <Square key={i} value={value} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
    </div>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_, move) => {
    let description = move > 0 ? `Ir al movimiento #${move}` : "Ir al inicio del juego";
    return (
      <li key={move}>
        <button
          className="px-4 py-2 bg-black bg-opacity-60 border-2 border-white text-white rounded-lg 
          shadow-md hover:shadow-[0px_0px_20px_5px_rgba(255,255,255,0.5)] transition-all duration-300"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="h-screen flex flex-col justify-center items-center text-white relative overflow-hidden pt-12">
    <BackToHome />
      <div className="absolute inset-0 z-0"></div>

      <div className="px-6 py-3 rounded-lg border-2 border-white bg-black bg-opacity-60 backdrop-blur-lg z-10">
        <h1 className="text-4xl font-bold text-white">Tic-Tac-Toe</h1>
      </div>

      <div className="flex justify-center items-start mt-8 gap-10 z-10">
        {/* Tablero de juego */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />

        {/* Historial de movimientos a la derecha */}
        <div className="bg-black bg-opacity-60 text-white p-6 rounded-lg border-2 border-white backdrop-blur-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Historial de Jugadas</h2>
          <ol className="list-none space-y-2">{moves}</ol>
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
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
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
