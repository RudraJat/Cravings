const ItemList = ({ items }) => {
  return (
    <div className="mt-4 space-y-4">
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

        const displayPrice = (finalPrice || defaultPrice || price) / 100;

        return (
          <div
            key={id}
            className="flex justify-between items-start bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="w-3/4">
              <h4 className="text-base font-semibold text-gray-800">{name}</h4>
              {description && (
                <p className="text-sm text-gray-500 mt-1">{description}</p>
              )}
              <p className="mt-2 text-green-700 font-bold">
                ₹{displayPrice || "N/A"}
              </p>
            </div>

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
  );
};

export default ItemList;
