import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.2124007&lng=78.1772053&restaurantId=668206&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();

    console.log(json);
    
    setresInfo(json?.data);
  };

  const { name, cuisines, avgRating, costForTwoMessage, deliveryTime } = resInfo?.cards[2]?.card?.card?.info || {};

  return resInfo === null ? <Shimmer /> : (
    <div>
      <div>{name}</div>
      <div>{cuisines.join(", ")}</div>
      <div>{costForTwoMessage}</div>
      <div>{avgRating}⭐</div>
      <div>{deliveryTime}</div>
    </div>
  );
};

export default RestaurantMenu;
