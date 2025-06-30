import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


function Body() {
  return (
    <div className="body">
      <div className="search">Search</div>
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