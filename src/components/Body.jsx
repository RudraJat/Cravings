import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState  } from "react"; 

const Body = () => {

  //Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants]=useState(resList);
     
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
