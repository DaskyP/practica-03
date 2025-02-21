/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    addTodo(input);
    setInput(""); 
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-3 z-10">
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="px-4 py-2 rounded-lg text-black w-64 border-2 border-white bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
      />
      <button type="submit" className="px-4 py-2 bg-white text-black border-2 border-black rounded-lg hover:bg-gray-300 transition-all">
        ➕ Agregar
      </button>
    </form>
  );
};

export default TodoForm;
