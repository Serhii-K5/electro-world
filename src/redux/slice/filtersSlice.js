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
      if (index < 0) {
        // state.items.push(action.payload);
        state.items.push({ key: action.payload.key, value: [action.payload.value]});
      } else {
        if (action.payload.key === 'name' || action.payload.key === 'price' || action.payload.key === 'cat_parentId') {
          state.items.splice(index, 1, action.payload);
        } else {
          state.items[index].value.push(action.payload.value);
        }
      }
    },
    deleteFilters(state, action) {
      const arr = state.items.map(item => item.key);
      const index = arr.findIndex(item => item === action.payload.key);
      if (index >= 0) {
        // if (state.items[index].value === '') {
        if (state.items[index].value.length > 1) {
          const pos = state.items[index].value.findIndex(item => item === action.payload.value);        
          state.items[index].value.splice(pos, 1);
          // state.items.splice(index, 1); 
        } else {
          state.items.splice(index, 1);
          // const pos = state.items[index].value.findIndex(item => item === action.payload.value);        
          // state.items.value.splice(pos, 1);
        }
        // console.log(state.items[index].value);

        // const pos = [state.items[index].value].findIndex(item => item === console.log(item) && action.payload.value);
        // const pos = state.items[index].value.findIndex(item => item === console.log(item) && action.payload.value);

        // const pos = state.items[index].value.findIndex(item => item === action.payload.value);        
        // state.items.value.splice(pos, 1);          
      }
      // state.items.splice(0, state.items.length - 1);
      // state.items.splice(0, 1, []);
    },
  },
});

export const { changeFilters, deleteFilters } = sliceFilters.actions;
export const filtersReducer = sliceFilters.reducer;
