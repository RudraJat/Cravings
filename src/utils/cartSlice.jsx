import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },

  reducers: {
    
    //MUTATING the state - It is only possible in RTK not in previous redux(Vanilla)

    addItem: (state, action) => {
      const newItem = action.payload;
      const itemInfo = newItem.card?.info || newItem.info || newItem;

      const existingItem = state.items.find(
        (item) => {
          const existingInfo = item.card?.info || item.info || item;
          return existingInfo.id === itemInfo.id;
        }
      );

      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const removedItem = action.payload;
      const itemInfo = removedItem.card?.info || removedItem.info || removedItem;

      const index = state.items.findIndex((item) => {
        const existingInfo = item.card?.info || item.info || item;
        return existingInfo.id === itemInfo.id;
      });

      if (index !== -1) {
        if ((state.items[index].quantity || 1) > 1) {
          state.items[index].quantity -= 1;
        } else {
          state.items.splice(index, 1);
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;
