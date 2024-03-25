import { createSlice } from "@reduxjs/toolkit";

const sliceUserName = createSlice({
  name: 'userName',
  initialState: {
    name: '',
  },
  reducers: {
    changeUserName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeUserName } = sliceUserName.actions;
export const userNameReducer = sliceUserName.reducer;


