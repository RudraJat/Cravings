import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function Body() {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2124007&lng=78.1772053&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setlistOfRestaurants(restaurants);
    setfilteredRestaurants(restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1 className="text-center text-red-600 text-xl mt-32 font-bold">
        🔴 You are offline. Please check your internet connection.
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body pt-28 min-h-screen bg-green-100 px-6 md:px-16 pb-10">
      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 border border-green-100">
          {/* Search Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurants(filtered);
            }}
            className="flex items-center gap-3 w-full md:w-auto"
          >
            <input
              type="text"
              placeholder="Search restaurants..."
              value={searchText}
              onChange={(e) => setsearchText(e.target.value)}
              className="px-5 py-3 rounded-xl border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400 w-full md:w-80 text-sm"
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
              setfilteredRestaurants(filteredList);
            }}
          >
            ⭐ Rating 4.3+
          </button>
        </div>
      </div>

      {/* Restaurant Cards Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredRestaurants
          .filter((res) => res?.info)
          .map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurantMenu/" + restaurant?.info?.id}
              className="hover:scale-105 transition-transform duration-300"
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Body;
