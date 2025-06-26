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

const RestaurantCard=()=>{
    return(
        <div className="res-card">
            <img className="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2469fa88ee9b0b5d1366ba88f2a7fa7f" alt="ich-coff-img" />
            <h3>Indian Coffee House</h3>
            <h4>Rating: 4.5 stars</h4>
            <h4>Cost for Two: ₹300</h4>
        </div>
    )
};

const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* restaurant container */}
                <RestaurantCard/>
            </div>
        </div>
    )
};

const AppLayout = () => {
  return <div className="app-layout">
    <Header/>
    <Body/>
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
