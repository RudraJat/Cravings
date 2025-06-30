import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


function Body() {
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}

      <div className="filter-btn">
        <button className="btn">Rating above 4⭐</button>
      </div>
      <div className="res-container">
        {/* restaurant container */}
        {
          resList.map((restaurant) => (
            <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
}

export default Body;