import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
