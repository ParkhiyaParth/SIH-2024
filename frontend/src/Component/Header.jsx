import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 border-b">
      <div className="text-xl font-bold">
        <Link to={"/"}>
          <img src="./src/assets/logo.png" className="h-20 w-20"></img>
        </Link>
      </div>
      <nav className="space-x-4">
        <a href="Home" className="text-gray-600 hover:text-gray-900 hover:underline hover:decoration-purple-600">
          Home
        </a>
        <a href="DetailForm" className="text-gray-600 hover:text-gray-900 hover:underline hover:decoration-purple-600">
          DetailForm
        </a>
        <a href="Explore" className="text-gray-600 hover:text-gray-900 hover:underline hover:decoration-purple-600">
          Explore
        </a>
        <a href="Contact" className="text-gray-600 hover:text-gray-900 hover:underline hover:decoration-purple-600">
          Contact
        </a>
        <a href="AboutUs" className="text-gray-600 hover:text-gray-900  hover:underline hover:decoration-purple-600">
          About Us
        </a>
      </nav>
      <div>
        <Link to="/sign-in">
          <button className="mr-4 px-4 py-2 border rounded hover:bg-purple-600 hover:text-white">Sign In</button>
        </Link>
        <Link to={"/register"}>
          <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-white hover:text-black border">
            Register
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
