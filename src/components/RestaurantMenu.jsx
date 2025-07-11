import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

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
    <div className="pt-28 pb-14 px-6 md:px-20 bg-gradient-to-br from-green-50 via-green-100 to-green-200 min-h-screen">
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
        <h2 className="text-2xl font-bold text-green-700 mb-6">📋 Explore Menu</h2>

        {categories?.map((category) => {
          const items = category?.card?.card?.itemCards;
          if (!items?.length) return null;

          return (
            <div key={category.card.card.title} className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-green-300 pb-1">
                {category.card.card.title}
              </h3>

              <div className="space-y-4">
                {items.map((item) => {
                  const {
                    id,
                    name,
                    price,
                    defaultPrice,
                    finalPrice,
                    description,
                    imageId,
                  } = item.card.info;

                  const displayPrice =
                    (finalPrice || defaultPrice || price) / 100;

                  return (
                    <div
                      key={id}
                      className="flex justify-between items-start bg-white shadow-md border border-green-100 rounded-2xl px-4 py-4 hover:shadow-xl transition duration-300"
                    >
                      {/* Left Text Info */}
                      <div className="w-3/4">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {name}
                        </h4>
                        {description && (
                          <p className="text-sm text-gray-500 mt-1">
                            {description}
                          </p>
                        )}
                        <p className="mt-2 text-green-700 font-bold">
                          ₹{displayPrice || "N/A"}
                        </p>
                      </div>

                      {/* Right Image (Optional) */}
                      {imageId && (
                        <img
                          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_100/${imageId}`}
                          alt={name}
                          className="rounded-xl object-cover w-24 h-20 ml-4 shadow"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
