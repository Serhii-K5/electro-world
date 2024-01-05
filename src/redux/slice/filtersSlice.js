import { createSlice } from "@reduxjs/toolkit";

const sliceFilters = createSlice({
  name: 'filters',
  initialState: {
    items: [
      // {
      //   key: 'parentId',
      //   value: '',
      // },
      {
        key: 'name',
        value: '',
      },
      {
        key: 'price',
        value: [0, 0],
      }
    ],
  },
  reducers: {
    changefilters(state, action) {
      const arr = state.items.map(item => item.key);
      const index = arr.findIndex(item => item === action.payload.key)
      // console.log(arr, "; ", action.payload.key)
      // const index = state.items.findIndex(item =>
      //   item.key.findIndex(key => console.log(key, '; ', action.payload.key) && key === action.payload.key))
        // console.log(item.key) && item.key === action.payload.key);
      if (index < 0) {
        state.items.push(action.payload)
      } else {
        state.items.splice(index, 1, action.payload);
      }
    },
    deletefilters(state, action) {
      state.items.splice(0, state.items.length - 1)
      state.items.splice(0, 1, [{
          key: 'name',
          value: '',
        },
        {
          key: 'price',
          value: [0, 0],
        }
      ])
    }
  },
});

export const { changefilters, deletefilters } = sliceFilters.actions;
export const filtersReducer = sliceFilters.reducer;
