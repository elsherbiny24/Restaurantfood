


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  totalquantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const existingProduct = state.cartProducts.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cartProducts.push({
          ...action.payload,
          quantity: 1,
        });
      }
      state.totalquantity++;
      state.totalAmount += action.payload.price;
    },
    removeItem(state, action) {
      const existingProduct = state.cartProducts.find(
        (product) => product.id === action.payload
      );
      if (existingProduct.quantity === 1) {
        state.cartProducts = state.cartProducts.filter(
          (product) => product.id !== action.payload
        );
      } else {
        existingProduct.quantity--;
      }
      state.totalquantity--;
      state.totalAmount -= existingProduct.price;
    },
    deleteItem(state, action) {
      const existingProduct = state.cartProducts.find(
        (product) => product.id === action.payload
      );
      state.totalquantity -= existingProduct.quantity;
      state.totalAmount -= existingProduct.price * existingProduct.quantity;
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
    },
    addProducts(state, action) {
      const incomingProducts = action.payload;
      const existingProducts = state.cartProducts;

      incomingProducts.forEach((incomingProduct) => {
        const existingProduct = existingProducts.find(
          (product) => product.id === incomingProduct.id
        );

        if (existingProduct) {
          existingProduct.quantity += incomingProduct.quantity;
        } else {
          state.cartProducts.push(incomingProduct);
        }
      });

      state.totalquantity = state.cartProducts.reduce(
        (sum, product) => sum + product.quantity,
        0
      );
      state.totalAmount = state.cartProducts.reduce(
        (sum, product) => sum + product.quantity * product.price,
        0
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;