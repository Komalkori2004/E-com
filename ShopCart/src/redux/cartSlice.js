import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: savedCart
  },

  reducers: {
    addToCart: (state, action) => {
      const exist = state.items.find(
        item =>
          item.id === action.payload.id &&
          item.userId === action.payload.userId
      );

      if (exist) {
        exist.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          userId: action.payload.userId
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    removeCart: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      );

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    increaseQty: (state, action) => {
      const item = state.items.find(
        item => item.id === action.payload
      );

      if (item) item.quantity += 1;

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    decreaseQty: (state, action) => {
      const item = state.items.find(
        item => item.id === action.payload
      );

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(
          item => item.id !== action.payload
        );
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    clearCart: (state) => {
      state.items = []
      localStorage.setItem("cartItems", JSON.stringify([]))
    }

  }
});

export const { addToCart, removeCart, increaseQty, decreaseQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;