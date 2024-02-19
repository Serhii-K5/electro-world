import { createSlice } from "@reduxjs/toolkit";

const sliceFilters = createSlice({
  name: 'filters',
  initialState: {
    items: [],
  },
  reducers: {    
    addFilters(state, action) {
      const { key, value } = action.payload;
      // Проверяем, существует ли уже объект с таким ключом
      const existingFilterIndex = state.items.findIndex(filter => filter.key === key);

      if (existingFilterIndex !== -1) {
        // Если ключ существует, обновляем значение
        state.items[existingFilterIndex].value.push(value);
      } else {
        // Если ключа нет, добавляем новый объект
        state.items.push({ key, value });
      }
    },
    changeFilters(state, action) {
      const { key, value } = action.payload;
      // Проверяем, существует ли уже объект с таким ключом
      const existingFilterIndex = state.items.findIndex(filter => filter.key === key);

      if (existingFilterIndex !== -1) {
        // Если ключ существует, обновляем значение
        state.items[existingFilterIndex].value = value;
      } else {
        // Если ключа нет, добавляем новый объект
        state.items.push({ key, value });
      }
    },
    deleteFilters(state, action) {
      const { key } = action.payload;
      // Проверяем, существует ли уже объект с таким ключом
      const existingFilterIndex = state.items.findIndex(filter => filter.key === key);
      if (existingFilterIndex !== -1) {
        state.items.splice(existingFilterIndex, 1);
        
        // if (state.items[index].value.length > 1) {
        //   const pos = state.items[index].value.findIndex(item => item === action.payload.value);        
        //   state.items[index].value.splice(pos, 1);
        // } else {
        //   state.items.splice(index, 1);
        // }
      }
    },
  },
});

export const { addFilters, changeFilters, deleteFilters } = sliceFilters.actions;
export const filtersReducer = sliceFilters.reducer;
