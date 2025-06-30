import {LOGO_URL} from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo-img"
          src={LOGO_URL}
          alt="logo-img"
        />
      </div>
      <div className="nav-items">
        <div className="nav-list">
          <div>Home</div>
          <div>Contact Us</div>
          <div>About Us</div>
          <div>Cart</div>
        </div>
      </div>
    </div>
  );
};

export default Header;