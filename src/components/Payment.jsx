import { useState } from "react";
import { CreditCard, Lock, Check, Truck, CreditCardIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Payment = ({ onPaymentComplete = () => {} }) => {
  const dispatch = useDispatch();

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });
  const [cashDetails, setCashDetails] = useState({ name: "", phone: "" });
  const [paymentComplete, setPaymentComplete] = useState(false);

  const formatCardNumber = (val) => {
    const digitsOnly = val.replace(/\D/g, "").substring(0, 16);
    return digitsOnly.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatExpiry = (val) => {
    const digitsOnly = val.replace(/\D/g, "").substring(0, 4);
    return digitsOnly.length > 2
      ? digitsOnly.substring(0, 2) + "/" + digitsOnly.substring(2)
      : digitsOnly;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (paymentMethod === "card") {
      const { number, expiry, cvv } = cardDetails;
      if (number.replace(/\s/g, "").length !== 16)
        return alert("Enter a valid 16-digit card number.");
      if (expiry.length !== 5 || !/^\d{2}\/\d{2}$/.test(expiry))
        return alert("Enter expiry in MM/YY format.");
      if (cvv.length !== 3) return alert("Enter valid 3-digit CVV.");
    } else {
      if (!cashDetails.name || !cashDetails.phone)
        return alert("Enter name and phone for COD.");
    }

    // ✅ Clear the cart after successful payment
    dispatch(clearCart());

    setPaymentComplete(true);
    setTimeout(() => onPaymentComplete(), 2000);
  };

  if (paymentComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-green-50 px-6">
        <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] text-center max-w-md w-full border border-green-100">
          <Check className="text-green-500 w-20 h-20 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-green-600 mb-2">Payment Successful!</h2>
          <p className="text-gray-600 text-base">Your order is being processed 🚀</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-pink-50 pt-28 pb-20 px-6 flex justify-center items-start">
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-xl border border-pink-100 rounded-3xl shadow-2xl p-10">
        <div className="flex items-center justify-center gap-3 mb-10">
          <CreditCard className="text-green-600 w-10 h-10" />
          <h1 className="text-3xl font-extrabold text-green-700 tracking-wide">Complete Your Payment</h1>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setPaymentMethod("card")}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl transition-all duration-300 shadow-md border ${
              paymentMethod === "card"
                ? "bg-green-600 text-white border-green-600"
                : "bg-green-100 text-green-600 border-green-200 hover:bg-green-200"
            }`}
          >
            <CreditCardIcon size={18} /> Card
          </button>
          <button
            onClick={() => setPaymentMethod("cod")}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl transition-all duration-300 shadow-md border ${
              paymentMethod === "cod"
                ? "bg-green-600 text-white border-green-600"
                : "bg-green-100 text-green-600 border-green-200 hover:bg-green-200"
            }`}
          >
            <Truck size={18} /> COD
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {paymentMethod === "card" ? (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Card Number</label>
                <input
                  type="text"
                  value={cardDetails.number}
                  onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                  placeholder="1234 5678 9012 3456"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Name on Card</label>
                <input
                  type="text"
                  value={cardDetails.name}
                  onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Expiry (MM/YY)</label>
                  <input
                  type="text"
                  value={cardDetails.expiry}
                  onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                  placeholder="12/25"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">CVV</label>
                  <input
                    type="password"
                    value={cardDetails.cvv}
                    onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                    placeholder="123"
                    maxLength="3"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={cashDetails.name}
                  onChange={(e) => setCashDetails({ ...cashDetails, name: e.target.value })}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={cashDetails.phone}
                  onChange={(e) => setCashDetails({ ...cashDetails, phone: e.target.value })}
                  placeholder="9876543210"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl hover:from-white hover:to-white hover:text-green-900 hover:border hover:border-green-400 transition-all duration-300"
          >
            {paymentMethod === "card" ? "Pay Securely" : "Place Order"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
