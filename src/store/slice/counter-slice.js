import { createSlice } from "@reduxjs/toolkit";

const counterCart = createSlice({
  name: "cart-counter",
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    deleteItem(state, action) {
      const idSelect = action.payload;
      const existingItem = state.items.find((item) => item.id === idSelect);

      if (existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        state.items = state.items.filter((item) => item.id !== idSelect);
      }

      state.totalQuantity--;
    },
  },
});

export const counterAction = counterCart.actions;
export default counterCart.reducer;
