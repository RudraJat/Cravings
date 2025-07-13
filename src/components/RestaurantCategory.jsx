import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, SetShowIndex }) => {
  const handleClick = () => {
    SetShowIndex(); // toggle active section
  };

  return (
    <div>
      <div className="w-full mx-auto my-4 bg-white shadow-md border border-green-100 rounded-2xl px-6 py-4 hover:shadow-xl transition duration-300">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg text-gray-800">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-gray-800 font-bold ">{showItems ? "⮝" : "⮟"}</span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
