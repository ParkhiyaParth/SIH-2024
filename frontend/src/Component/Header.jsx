import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-0 border-b">
      <div className="text-xl font-bold">
        <Link to={"/"}>
          <img src="./src/assets/logo.png" className="h-20 w-20"></img>
        </Link>
      </div>
      <nav className="space-x-4">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Home
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Form
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Explore
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Contact
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          About Us
        </a>
      </nav>
      <div>
        <Link to="/sign-in">
          <button className="mr-4 px-4 py-2 border rounded">Sign In</button>
        </Link>
        <Link to={"/register"}>
          <button className="px-4 py-2 bg-purple-600 text-white rounded">
            Register
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
