import { createSlice } from "@reduxjs/toolkit";

const sliceFilteredProducts = createSlice({
  name: 'filteredProducts',
  initialState: {
    filteredProduct: [],
  },
  reducers: {
    changefilteredProducts(state, action) {
      state.filteredProduct = action.payload;
    },
  },
});

export const { changefilteredProducts } = sliceFilteredProducts.actions;
export const filteredProductsReducer = sliceFilteredProducts.reducer;
