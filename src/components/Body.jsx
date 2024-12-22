import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState  } from "react"; 

const Body = () => {

  //Local State Variable - Super powerful variable
  const [listOfRestaurants]=useState([{
    "info": {
      "id": "234875",
      "name": "Adil Hotel",
      "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "North Indian",
        "Biryani",
        "Tandoor"]}
  }])
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button Clicked");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restro-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div> 
    </div>
  );
};

export default Body;
