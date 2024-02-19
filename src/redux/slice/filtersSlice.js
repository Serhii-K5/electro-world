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
        const existingFilterValueIndex = state.items[existingFilterIndex].value.findIndex(filter => filter === value);
        if (existingFilterValueIndex === -1) {          
          state.items[existingFilterIndex].value.push(value);
        }
      } else {
        // Если ключа нет, добавляем новый объект
        // state.items.push({ key, value });
        // const arr = [value];
        // state.items.push({ key, arr });
        state.items.push({ key: key, value: [value] });
      }
    },
    changeFilters(state, action) {
      const { key, value } = action.payload;
      // Проверяем, существует ли уже объект с таким ключом
      const existingFilterIndex = state.items.findIndex(filter => filter.key === key);

      if (existingFilterIndex !== -1) {
        // Если ключ существует, обновляем значение
        state.items[existingFilterIndex].value = [value];
      } else {
        // Если ключа нет, добавляем новый объект
        state.items.push({ key: key, value: [value] });
      }
    },
    deleteFilters(state, action) {
      // const { key } = action.payload;
      const { key, value } = action.payload;
      // Проверяем, существует ли уже объект с таким ключом
      const existingFilterIndex = state.items.findIndex(filter => filter.key === key);
      if (existingFilterIndex !== -1) {
        const existingFilterValueIndex = state.items[existingFilterIndex].value.findIndex(filter => filter === value);
        if (existingFilterValueIndex !== -1) {
          state.items[existingFilterIndex].value.splice(existingFilterValueIndex, 1);
        } else {
          state.items.splice(existingFilterIndex, 1);
        }
      }
    },
  },
});

export const { addFilters, changeFilters, deleteFilters } = sliceFilters.actions;
export const filtersReducer = sliceFilters.reducer;
