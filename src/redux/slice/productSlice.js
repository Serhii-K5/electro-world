import { createReducer } from '@reduxjs/toolkit';
import { fetchProducts } from '../operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.error = action.payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const productsReducer = createReducer(
  initialState,
  // {
  //   [fetchProducts.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [fetchProducts.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     state.items = action.payload;
  //   },
  //   [fetchProducts.rejected]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // }
  {
    [fetchProducts.pending]: handlePending,
    [fetchProducts.fulfilled]: handleFulfilled,
    [fetchProducts.rejected]: handleRejected,
  }
);
