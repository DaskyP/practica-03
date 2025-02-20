import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TicTacToe from "./pages/TicTacToe"; 
import { TicTacPC } from "./pages/TicTacPC";


export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/tic-tac-toe-pc" element={<TicTacPC />} />
      </Routes>
    </Router>
  );
};

export default App;
