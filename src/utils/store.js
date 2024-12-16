import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducers/userSlice";
import cartSlice from "../reducers/cartSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
  },
});

export default store;
