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
            className="flex justify-between items-start bg-gray-50 hover:bg-green-50 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
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
            <div>
            <div className="relative left-10 top-28">
            <button className="p-1 px-6 bg-white rounded hover:bg-gray-100 font-bold  text-green-500 hover:scale-105 shadow-lg m-auto">ADD</button>
            </div>
              <div>
            {imageId && (
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200/${imageId}`}
                alt={name}
                className="rounded-2xl object-cover w-32 h-24 ml-4 border border-gray-200 shadow-md hover:shadow-green-300  transition duration-300 ease-in-out"
              />
            )}
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
