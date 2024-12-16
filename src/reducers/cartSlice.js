import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems(state, action) {
      state.cartItems = [...state.cartItems, action.payload];
    },
    resetCartItem(state) {
      state.cart = [];
    },
    removeCartItems(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { setCartItems, removeCartItems, resetCartItem } =
  cartSlice.actions;
export default cartSlice.reducer;
