import { LOGO_URL } from "../utils/constants";
import {useState} from "react";

const Header = () => {
  
  const [loginBtn, setloginBtn] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo-img" src={LOGO_URL} alt="logo-img" />
      </div>
      <div className="nav-items">
        <div className="nav-list">
          <div>Home</div>
          <div>Contact Us</div>
          <div>About Us</div>
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
