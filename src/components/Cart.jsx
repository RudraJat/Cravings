import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((acc, item) => {
    const itemInfo = item.card?.info || item.info || item;
    const price = itemInfo?.price ?? itemInfo?.defaultPrice ?? 0;
    const quantity = item.quantity ?? 1;
    return acc + price * quantity;
  }, 0);

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="pt-28 min-h-screen px-6 md:px-16 pb-16 bg-gradient-to-br from-white via-green-50 to-green-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-green-700 mb-8">
          🛒 Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-600 text-lg font-medium mt-20">
            🛍️ Your cart is empty.{" "}
            <Link
              to="/"
              className="text-green-600 hover:underline font-semibold"
            >
              Browse restaurants
            </Link>
          </div>
        ) : (
          <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-green-100">
            <div className="flex justify-end px-6 pt-4">
              <button
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>

            {cartItems.map((item, index) => {
              const itemInfo = item.card?.info || item.info || item;
              const price = itemInfo?.price ?? itemInfo?.defaultPrice ?? 0;
              const imageId =
                itemInfo?.imageId || itemInfo?.cloudinaryImageId || "";
              const quantity = item.quantity ?? 1;

              return (
                <div
                  key={`${itemInfo.id}-${index}`}
                  className="flex flex-col md:flex-row justify-between gap-4 items-center p-6 border-b last:border-b-0 hover:bg-green-50 transition"
                >
                  <div className="flex items-center gap-6 w-full md:w-2/3">
                    <img
                      src={CDN_URL + imageId}
                      alt={itemInfo.name}
                      className="w-24 h-24 object-cover rounded-2xl shadow-lg"
                    />
                    <div>
                      <h2 className="text-xl font-bold text-gray-800 mb-1">
                        {itemInfo.name}
                      </h2>
                      <p className="text-gray-600 text-sm mb-1">
                        {itemInfo.description || "Delicious food item"}
                      </p>
                      <p className="text-sm text-gray-500">Qty: {quantity}</p>
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => handleAdd(item)}
                          className="px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700"
                        >
                          Add +
                        </button>
                        <button
                          onClick={() => handleRemove(item)}
                          className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-700"
                        >
                          Remove -
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-1/3 justify-end">
                    <p className="text-green-700 text-lg font-semibold text-right md:text-left">
                      ₹{((price * quantity) / 100).toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleRemove(item)}
                      className="bg-red-100 text-red-500 px-4 py-2 rounded-xl hover:bg-red-200 transition font-semibold text-sm"
                    >
                      <Trash2 size={16} className="inline mr-1" /> Remove
                    </button>
                  </div>
                </div>
              );
            })}

            <div className="flex flex-col md:flex-row justify-between items-center px-8 py-6 bg-green-100  ">
              <p className="text-2xl font-bold text-red-800">
                Total: ₹{(totalPrice / 100).toFixed(2)}
              </p>
              <button
                onClick={() => navigate("/payment")}
                className="mt-4 md:mt-0 bg-green-600 hover:scale-105 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-300"
              >
                ✅ Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
