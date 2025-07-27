import cartReducer from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
    reducer: {
        cart: cartReducer, // Importing the cart reducer
    },
});

export default appStore;