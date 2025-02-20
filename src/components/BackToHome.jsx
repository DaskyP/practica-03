import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
const BackToHome = () => {
  return (
    <Link
      to="/"
      className="absolute z-5 top-6 left-6 flex items-center gap-2 px-4 py-2 bg-black bg-opacity-60 
      border-2 border-white text-white rounded-lg shadow-md hover:shadow-[0px_0px_15px_5px_rgba(255,255,255,0.5)] 
      transition-all duration-300 hover:-translate-x-2"
    >
      <ArrowLeftIcon className="w-16 h-8 text-white" />
    </Link>
  );
};

export default BackToHome;
