import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  total: 0,
  quantity: 0,
  history: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    increaseAmount: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decreaseAmount: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    calculateTotal: (state) => {
      let quantity = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        quantity = quantity + item.amount;
        total = total + item.price * item.amount;
      });
      state.quantity = quantity;
      state.total = total;
    },
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.amount++;
      } else {
        state.cartItems.push({ ...action.payload, amount: 1 });
      }
    },
    setHistory: (state, action) => {
      state.history = [
        ...state.history,
        {
          cartID: action.payload.id,
          total: action.payload.total,
          discount: action.payload.discount,
          user: action.payload.user,
          items: [...state.cartItems],
        },
      ];
      state.cartItems = [];
    },
  },
});
export const {
  clearCart,
  decreaseAmount,
  increaseAmount,
  removeItem,
  calculateTotal,
  addToCart,
  setHistory,
} = cartReducer.actions;
export default cartReducer.reducer;
