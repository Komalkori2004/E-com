import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {   // ✅ correct
    cart: cartReducer,
    user: userReducer
  }
});