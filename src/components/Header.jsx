import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-50 via-green-100 to-green-200 shadow-md flex justify-between items-center px-8 py-0.5 rounded-b-xl">
      {/* Logo */}
      <div className="flex items-center px-20">
        <Link to="/">
          <img
            src={LOGO_URL}
            alt="logo-img"
            className="h-20 w-auto rounded-lg"
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
          onClick={() =>
            setloginBtn(loginBtn === "Login" ? "Logout" : "Login")
          }
          className={`px-5 py-1.5 rounded-full text-sm font-bold shadow-md transition-all duration-300 transform hover:scale-105 ${
            loginBtn === "Login"
              ? "bg-green-500 hover:bg-white text-white hover:text-green-600"
              : "bg-red-500 hover:bg-white text-white hover:text-red-600"
          }`}
        >
          {loginBtn}
        </button>
      </nav>
    </header>
  );
};

export default Header;
