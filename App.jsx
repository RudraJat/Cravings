import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo-img"
          src="https://file.aiquickdraw.com/imgcompressed/img/compressed_1de531cc9e3f6d6015240aafc950996c.webp"
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
const AppLayout = () => {
  return <div className="app-layout">
    <Header />
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
