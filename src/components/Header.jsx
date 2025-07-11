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
      <div className="flex items-center">
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
        <span className="text-sm font-bold">
          Online Status: {onlineStatus ? "🟢" : "🔴"}
        </span>

        {[{ to: "/", label: "Home" }, { to: "/contact", label: "Contact" }, { to: "/about", label: "About" }].map(
          (link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:bg-white hover:text-green-600 hover:shadow-md font-bold px-3 py-1 rounded-md transition-all duration-200 transform hover:scale-105"
            >
              {link.label}
            </Link>
          )
        )}

        <div className="hover:bg-white hover:text-green-600 hover:shadow-md px-3 py-1 rounded-md transition-all duration-200 transform hover:scale-105 cursor-pointer">
          Cart 🛒
        </div>

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
