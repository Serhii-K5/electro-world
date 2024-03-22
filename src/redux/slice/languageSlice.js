import { createSlice } from "@reduxjs/toolkit";

// подключить для определения языка по языку системы
// const userLanguage = navigator.language;

const sliceLanguage = createSlice({
  name: 'languages',
  initialState: {
    // language: 'UA',
    // отключить при определении языка по языку системы
    language: 0,
    // подключить при определении языка по языку системы
    // language: userLanguage === 'ru' ? 1 : 0,
  },
  reducers: {
    changeLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = sliceLanguage.actions;
export const languagesReducer = sliceLanguage.reducer;
