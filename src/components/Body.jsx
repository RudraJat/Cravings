import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2124007&lng=78.1772053&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Failed to fetch restaurant data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!onlineStatus) {
    return (
      <h1 className="text-center text-red-600 text-xl mt-32 font-bold">
        🔴 You are offline. Please check your internet connection.
      </h1>
    );
  }

  if (loading) return <Shimmer />;

  return (
    <div className="body pt-28 min-h-screen bg-green-0 px-6 md:px-16 pb-10">
      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div className="bg-green-50 backdrop-blur-md p-6 rounded-2xl shadow-lg w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 border border-green-100">
          {/* Search Form */}
          <form
          
            onSubmit={(e) => {
              e.preventDefault();
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
            className="flex items-center gap-3 w-full md:w-auto"
          >
            <input
              type="text"
              placeholder="Search restaurants..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="px-5 py-3 rounded-xl border bg-white/70 border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400 w-full md:w-80 text-sm"
            />
            <button
              type="submit"
              className="bg-gradient-to-br from-green-400 to-green-600 text-white font-semibold px-5 py-3 rounded-xl shadow-lg hover:shadow-xl hover:from-white hover:to-white hover:text-green-600 border border-transparent hover:border-green-500 transition-all duration-300 flex items-center gap-2"
            >
              🔍 Search
            </button>
          </form>

          {/* Filter Button */}
          <button
            className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-white font-semibold px-5 py-3 rounded-xl shadow-lg hover:shadow-xl hover:from-white hover:to-white hover:text-yellow-600 border border-transparent hover:border-yellow-400 transition-all duration-300 flex items-center gap-2"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            ⭐ Rating 4.3+
          </button>
        </div>
      </div>

      {/* Restaurant Cards Grid or Empty State */}
      {filteredRestaurants.length === 0 ? (
        <div className="text-center text-gray-600 text-lg font-medium mt-20">
          🥺 No restaurants found.
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurantMenu/" + restaurant?.info?.id}
              className="hover:scale-105 transition-transform duration-300"
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Body;
