import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center text-white relative overflow-hidden pt-12">
      <div className="absolute inset-0 z-0"></div>

      <div className="px-6 py-3 rounded-lg z-10">
        <h1 className="text-5xl font-bold text-white">Práctica 03</h1>
      </div>

      <p className="text-lg mt-4 text-gray-300 px-4 py-2 rounded-lg backdrop-blur-sm z-10">
        Selecciona una opción para comenzar
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 z-10 mt-8">
        <Link to="/tic-tac-toe" className="group relative block p-6 border-4 border-white rounded-lg shadow-md hover:shadow-[0px_0px_30px_10px_rgba(255,255,255,0.8)] transition-all duration-300 hover:-translate-y-2 bg-black bg-opacity-60 backdrop-blur-lg">
          <h2 className="text-2xl font-bold mb-2 text-white">Tic-Tac-Toe</h2>
          <p className="text-gray-300">Tutorial desde la documentación de React.</p>
        </Link>

        <Link to="/tic-tac-toe-pc" className="group relative block p-6 border-4 border-white rounded-lg shadow-md hover:shadow-[0px_0px_30px_10px_rgba(255,255,255,0.8)] transition-all duration-300 hover:-translate-y-2 bg-black bg-opacity-60 backdrop-blur-lg">
          <h2 className="text-2xl font-bold mb-2 text-white">Tic-Tac-Toe vs PC</h2>
          <p className="text-gray-300">El gato y el ratón contra la máquina.</p>
        </Link>

        <Link to="/todo-list" className="group relative block p-6 border-4 border-white rounded-lg shadow-md hover:shadow-[0px_0px_30px_10px_rgba(255,255,255,0.8)] transition-all duration-300 hover:-translate-y-2 bg-black bg-opacity-60 backdrop-blur-lg">
          <h2 className="text-2xl font-bold mb-2 text-white">To-Do List</h2>
          <p className="text-gray-300">Una lista de cosas por hacer.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
