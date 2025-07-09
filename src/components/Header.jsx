import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo-img" src={LOGO_URL} alt="logo-img" />
        </Link>
      </div>
      <div className="nav-items">
        <div className="nav-list">
          <div>
            <span>Online Status: {onlineStatus ? "🟢" : "⭕"}</span>
          </div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div>
            <Link to="/about">About Us</Link>
          </div>
          <div>Cart</div>
          <button
            className="login-btn"
            onClick={() => {
              loginBtn === "Login"
                ? setloginBtn("Logout")
                : setloginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
