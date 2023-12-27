import { createSlice } from "@reduxjs/toolkit";

const sliceSearchParams = createSlice({
  name: 'searchParams',
  initialState: {
    parameter: 0,
  },
  reducers: {
    changeSearchParams(state, action) {
      state.parameter = action.payload;
    },
  },
});

export const { changeSearchParams } = sliceSearchParams.actions;
export const searchParamsReducer = sliceSearchParams.reducer;
