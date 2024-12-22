import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState  } from "react"; 

const Body = () => {

  //Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants]=useState([{
    "info": {
      "id": "234875",
      "name": "Adil Hotel",
      "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "North Indian",
        "Biryani",
        "Tandoor"],
        "avgRating": 3.4}
    },{
    "info": {
      "id": "234876",
      "name": "Jat Hotel",
      "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "North Indian",
        "Biryani",
        "Tandoor"],
        "avgRating": 4.3}
    }]);
     
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList=listOfRestaurants.filter(
              (res)=>res.info.avgRating>4
            );

            setListOfRestaurants(filteredList);
            
            console.log(filteredList);
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
