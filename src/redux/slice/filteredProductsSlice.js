import { createSlice } from "@reduxjs/toolkit";

const sliceFilteredProducts = createSlice({
  name: 'filteredProducts',
  initialState: {
    filteredProduct: [],
  },
  reducers: {
    changeFilteredProducts(state, action) {
      state.filteredProduct = action.payload;
    },
  },
});

export const { changeFilteredProducts } = sliceFilteredProducts.actions;
export const filteredProductsReducer = sliceFilteredProducts.reducer;
