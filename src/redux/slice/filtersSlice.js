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
        } else {
          state.items[existingFilterIndex].splice(0, 1, value);
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
      
      const searchKey = (curentArray, curentKey) => {
        const existingFilterIndex = curentArray.findIndex(filter => filter.key === curentKey);
        if (existingFilterIndex !== -1) { 
          // Если ключ существует, обновляем значение
          if (typeof value === 'object' && !(value instanceof Array)) { 
            // Если значение является объектом и это не массив, повторно вызывается функция
            searchKey(value, state.items[existingFilterIndex].value.key);
          } else if (value instanceof Array && Number.isFinite(value[0])) {
            curentArray[existingFilterIndex].value = [value];
          } else {
            // Проверка на наличие значения
            curentArray[existingFilterIndex].value ?
              curentArray[existingFilterIndex].value.push(value)
              : curentArray[existingFilterIndex].value = [value];
          }
        } else {
          // Если ключа нет, добавляем новый объект
          curentArray.push({ key: key, value: [value] });          
        }
      }

      searchKey(state.items, key);
    },
    deleteFilters(state, action) {
      // const { key } = action.payload;
      const { key, value } = action.payload;

      const searchKey = (curentArray, curentKey) => {
        const existingFilterIndex = curentArray.findIndex(filter => filter.key === curentKey);
        if (existingFilterIndex !== -1) { 
          // Если ключ существует, обновляем значение
          if (!value || value === "") {
            curentArray.splice(existingFilterIndex, 1);
          } else if (typeof value === 'object' && (value instanceof Array)) { 
            // Если значение является объектом и это не массив, повторно вызывается функция
            // searchKey(value, curentArray[existingFilterIndex].value.key);
            searchKey(value.value, value.key);
          } else if (!(value instanceof Array && Number.isFinite(value[0]))) {
            const existingFilterValueIndex = curentArray[existingFilterIndex].value.findIndex(filter => filter === value);
            if (existingFilterValueIndex !== -1 && curentArray[existingFilterIndex].value.length > 1) {
              curentArray[existingFilterIndex].value.splice(existingFilterValueIndex, 1);
            } else {
              curentArray.splice(existingFilterIndex, 1);
            };
          }
        }
      }

      searchKey(state.items, key);

      // // Проверяем, существует ли уже объект с таким ключом
      // const existingFilterIndex = state.items.findIndex(filter => filter.key === key);
      // if (existingFilterIndex !== -1) {
      //   // Проверяем, существует ли уже такое значение в этом объекте
      //   const existingFilterValueIndex = state.items[existingFilterIndex].value.findIndex(filter => filter === value);
      //   if (existingFilterValueIndex !== -1 && state.items[existingFilterIndex].value.length > 1) {
      //     state.items[existingFilterIndex].value.splice(existingFilterValueIndex, 1);
      //   } else {
      //     state.items.splice(existingFilterIndex, 1);
      //   }
      // }
    },
  },
});

export const { addFilters, changeFilters, deleteFilters } = sliceFilters.actions;
export const filtersReducer = sliceFilters.reducer;
