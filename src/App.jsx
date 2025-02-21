import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TicTacToe from "./pages/TicTacToe"; 
import { TicTacPC } from "./pages/TicTacPC";
import  TodoApp  from "./pages/TodoApp";


export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/tic-tac-toe-pc" element={<TicTacPC />} />
        <Route path="/todo-list" element={<TodoApp />} />
      </Routes>
    </Router>
  );
};

export default App;
