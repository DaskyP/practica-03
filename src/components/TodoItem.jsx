/* eslint-disable react/prop-types */
const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
    return (
      <li className="flex items-center justify-between bg-white p-4 rounded-lg border-2 border-white shadow-lg transition-transform hover:scale-105">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
            className="w-6 h-6 cursor-pointer"
          />
          <span className={`text-lg transition-all duration-300 ${todo.completed ? "line-through text-gray-500 italic" : "text-gray-900"}`}>
            {todo.text}
          </span>
        </div>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-700 text-xl"
        >
          X
        </button>
      </li>
    );
  };
  
  export default TodoItem;
  