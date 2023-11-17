import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const sliceProducts = createSlice({
  name: 'products',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchProducts.pending]: handlePending,
    [fetchProducts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchProducts.rejected]: handleRejected,
  },
});

export const productsReducer = productsSlice.reducer;
