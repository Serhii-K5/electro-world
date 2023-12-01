import { createSlice } from "@reduxjs/toolkit";

const sliceLanguage = createSlice({
  name: 'languages',
  initialState: {
    // language: Boolean,
    // language: String,
    language: 'UK',
    // language: '',
    // language: 0,
  },
  reducers: {
    changeLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = sliceLanguage.actions;
export const languagesReducer = sliceLanguage.reducer;
