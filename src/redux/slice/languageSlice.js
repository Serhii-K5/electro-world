import { createSlice } from "@reduxjs/toolkit";

const userLanguage = navigator.language;

const sliceLanguage = createSlice({
  name: 'languages',
  initialState: {
    // language: Boolean,
    // language: String,
    // language: 'UA',
    // language: '',
    // language: 0,
    language: userLanguage === 'ru' ? 1 : 0,
  },
  reducers: {
    changeLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = sliceLanguage.actions;
export const languagesReducer = sliceLanguage.reducer;
