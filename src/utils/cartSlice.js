import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: []
    },

    //this reducer is for cart slice and we will import this reducer in appStore in main reducer of whole Store
    //and we will use this reducer in components to add, remove and clear items from cart
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
    },
});

export default cartSlice.reducer;
export const {addItem, removeItem, clearCart}= cartSlice.actions;