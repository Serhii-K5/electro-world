import { createSlice } from "@reduxjs/toolkit";

const sliceFilters = createSlice({
  name: 'filters',
  initialState: {
    items: [],
  },
  reducers: {
    changeFilters(state, action) {
      const arr = state.items.map(item => item.key);
      const index = arr.findIndex(item => item === action.payload.key);
      if (index < 0) {
        state.items.push({ key: action.payload.key, value: [action.payload.value]});
      } else {
        if (action.payload.key === 'name' || action.payload.key === 'price' || action.payload.key === 'cat_parentId') {
          state.items.splice(index, 1, action.payload);
        } else if (state.items[index].value[0] === '') {
          state.items.splice(index, 1);
        } else {
          const result = state.items[index].value.includes(action.payload.value);          
          if (!result) {
            state.items[index].value.push(action.payload.value);
          }          
        }
      }
    },
    deleteFilters(state, action) {
      const arr = state.items.map(item => item.key);
      const index = arr.findIndex(item => item === action.payload.key);
      if (index >= 0) {
        if (state.items[index].value.length > 1) {
          const pos = state.items[index].value.findIndex(item => item === action.payload.value);        
          state.items[index].value.splice(pos, 1);
        } else {
          state.items.splice(index, 1);
        }
      }
    },
  },
});

export const { changeFilters, deleteFilters } = sliceFilters.actions;
export const filtersReducer = sliceFilters.reducer;
