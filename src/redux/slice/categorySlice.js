import { createSlice } from "@reduxjs/toolkit";

const sliceCategory = createSlice({
  name: 'categories',
  initialState: {
    category: 0,
  },
  reducers: {
    changeCategory(state, action) {
      state.category = +action.payload;
    },
  },
});

export const { changeCategory } = sliceCategory.actions;
export const categoriesReducer = sliceCategory.reducer;
