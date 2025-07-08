import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.2124007&lng=78.1772053&restaurantId=84554&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    console.log(json);

    setresInfo(json?.data);
  };
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage, deliveryTime } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || [];

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(itemCards);
  return (
    <div>
      <div>{name}</div>
      <div>{cuisines.join(", ")}</div>
      <div>{costForTwoMessage}</div>
      <div>{avgRating}⭐</div>
      <div>{deliveryTime}</div>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹{item.card.info.price / 100 || "N/A"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
