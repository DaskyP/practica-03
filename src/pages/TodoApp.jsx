import { useState, useEffect } from "react";
import BackToHome from "../components/BackToHome";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    if (savedTodos.length > 0) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (text) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center text-white relative overflow-hidden">
      <BackToHome />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle,white,gray-300,black)] opacity-30 z-0"></div>

      <h1 className="text-5xl font-bold mb-6 border-b-4 border-white p-2 z-10">
        To-Do List
      </h1>

      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoApp;
