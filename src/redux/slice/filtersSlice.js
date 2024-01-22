import { createSlice } from "@reduxjs/toolkit";

const sliceFilters = createSlice({
  name: 'filters',
  initialState: {
    items: [],
    // items: [
    //   {
    //     key: 'name',
    //     value: '',
    //   },
    //   {
    //     key: 'price',
    //     value: [[0, 0]],
    //     // value: [{min: 0, max: 0}],
    //   },
    // ],
  },
  reducers: {
    changeFilters(state, action) {
      const arr = state.items.map(item => item.key);
      const index = arr.findIndex(item => item === action.payload.key);
      // console.log(arr, "; ", action.payload.key)
      // const index = state.items.findIndex(item =>
      //   item.key.findIndex(key => console.log(key, '; ', action.payload.key) && key === action.payload.key))
      // console.log(item.key) && item.key === action.payload.key);
      if (index < 0) {
        state.items.push(action.payload);
      } else {
        state.items.splice(index, 1, action.payload);
      }
    },
    deleteFilters(state, action) {
      const arr = state.items.map(item => item.key);
      const index = arr.findIndex(item => item === action.payload.key);
      if (index >= 0) {
        
        state.items.splice(0, state.items.length - 1);
        state.items.splice(0, 1, []);
      }
      // state.items.splice(0, state.items.length - 1);
      // state.items.splice(0, 1, []);
    },
  },
});

export const { changeFilters, deleteFilters } = sliceFilters.actions;
export const filtersReducer = sliceFilters.reducer;
