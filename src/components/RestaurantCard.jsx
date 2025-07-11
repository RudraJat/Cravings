import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData.info;

  return (
    <div className="bg-white/70 hover:bg-green-50 backdrop-blur-lg border border-green-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col justify-between">
      {/* Image */}
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="w-full h-48 object-cover rounded-t-3xl"
      />

      {/* Content */}
      <div className="p-4 space-y-1">
        <h3 className="text-lg font-bold text-green-800 truncate">{name}</h3>

        <p className="text-sm text-gray-600 truncate">
          {cuisines.slice(0, 4).join(", ")}
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span
            className={`px-2 py-0.5 rounded-full text-white font-semibold text-xs ${
              avgRating >= 4
                ? "bg-green-500"
                : avgRating >= 3
                ? "bg-yellow-400"
                : "bg-red-500"
            }`}
          >
            ⭐ {avgRating}
          </span>
          <span className="text-gray-500 font-medium">
            • {sla?.deliveryTime} mins
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-gray-200 flex justify-between items-center text-sm text-gray-700 font-semibold">
        <span>{costForTwo}</span>
        <span>🛵 {sla?.deliveryTime} mins</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
