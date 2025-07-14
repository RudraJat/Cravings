import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // 🔥 Open the first category by default
  const [showIndex, setShowIndex] = useState(0);

  if (!resInfo) return <ShimmerMenu />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    sla,
    areaName,
  } = resInfo?.cards[2]?.card?.card?.info || {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="pt-28 pb-14 px-6 md:px-20 bg-gradient-to-br from-green-50 via-green-50 to-green-100 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 w-full max-w-4xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
          {name}
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-700 mb-2">
          <span className="bg-green-100 px-2 py-1 rounded-full text-green-700 font-semibold">
            ⭐ {avgRating} ({totalRatingsString || "Ratings"})
          </span>
          <span>•</span>
          <span className="font-medium">{costForTwoMessage}</span>
        </div>

        <div className="text-green-700 font-medium text-sm mb-3">
          {cuisines?.join(", ")}
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between text-gray-500 text-sm">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-gray-600">📍 {areaName}</span>
          </div>
          <div className="flex items-center gap-1 mt-2 sm:mt-0">
            ⏱ <span>{sla?.deliveryTime || "--"} mins</span>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          📋 Explore Menu
        </h2>

        {categories?.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category.card.card}
            showItems={index === showIndex}
            
            // vese sbh restaurantCategory ki khud ki individual state hai to vo jabh ek ko kholenge to baaki band nhi hoge  but humne  uska control RestaurantMenu ko de diya hai to abh sbh sync me chl skti he
            //abh RestaurantCategory ko khud se pata nhi chalega ki vo khuli he ya nhi
            // to isliye humne showItems ko pass kiya he
            // aur SetShowIndex ko bhi pass kiya he
            //Abh RestaurantCategory Control Component ban gya he
            // aur RestaurantMenu Presentational Component ban gya he
            SetShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
