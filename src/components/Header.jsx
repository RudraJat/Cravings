import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { User } from "lucide-react";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);

  return (
    <header className="fixed h-24 top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-50 via-green-100 to-green-200 shadow-md flex justify-between items-center px-8 py-0.5 rounded-b-xl">
      {/* Logo */}
      <div className="flex items-center px-20">
        <Link to="/">
          <img
            src={LOGO_URL}
            alt="logo-img"
            className="h-19 w-auto rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-125"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-6 text-gray-700 font-semibold">
        {/* 1. Online Status */}
        <span className="text-sm font-bold">
          Online Status: {onlineStatus ? "🟢" : "🔴"}
        </span>

        {/* 2. Home */}
        <Link
          to="/"
          className="hover:bg-white hover:text-green-600 hover:shadow-md font-bold px-3 py-1 rounded-md transition-all duration-200 transform hover:scale-105"
        >
          Home
        </Link>

        {/* 3. Cart */}
        <div className="hover:bg-white hover:text-green-600 hover:shadow-md px-3 py-1 rounded-md transition-all duration-200 transform hover:scale-105 cursor-pointer">
          Cart 🛒
        </div>

        {/* 4. About Us */}
        <Link
          to="/about"
          className="hover:bg-white hover:text-green-600 hover:shadow-md font-bold px-3 py-1 rounded-md transition-all duration-200 transform hover:scale-105"
        >
          About Us
        </Link>

        {/* 5. Contact Us */}
        <Link
          to="/contact"
          className="hover:bg-white hover:text-green-600 hover:shadow-md font-bold px-3 py-1 rounded-md transition-all duration-200 transform hover:scale-105"
        >
          Contact Us
        </Link>

        {/* 6. Login/Logout Button */}
        <button
          onClick={() => setloginBtn(loginBtn === "Login" ? "Logout" : "Login")}
          className={`px-5 py-1.5 rounded-full text-sm font-bold shadow-md transition-all duration-300 transform hover:scale-105 ${
            loginBtn === "Login"
              ? "bg-green-500 hover:bg-white text-white hover:text-green-600"
              : "bg-red-500 hover:bg-white text-white hover:text-red-600"
          }`}
        >
          {loginBtn}
        </button>
        {
  loginBtn === "Login" ? (
    <div className="group relative flex items-center gap-3 px-4 py-0.5 rounded-full bg-white/70 backdrop-blur-md shadow-[0_4px_20px_rgba(0,128,0,0.2)] transition-all duration-300 ease-in-out hover:shadow-[0_6px_24px_rgba(0,128,0,0.3)] hover:scale-105 cursor-pointer">
      <div className="bg-green-100 p-2 rounded-full border border-green-300 shadow-inner transition-transform group-hover:scale-110">
        <User size={20} className="text-green-600" />
      </div>
      <span className="text-sm font-semibold text-gray-700 tracking-wide group-hover:text-green-700 transition-all duration-200">
        {loggedInUser}
      </span>
      {/* Tooltip on hover */}
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-white bg-green-700 px-3 py-1 rounded shadow-lg pointer-events-none">
        Logged in as {loggedInUser}
      </div>
    </div>
  ) : null
}

      </nav>
    </header>
  );
};

export default Header;
