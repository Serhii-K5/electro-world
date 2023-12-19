import { createSlice } from "@reduxjs/toolkit";

const sliceDirectoryPath = createSlice({
  name: 'directoryPath',
  initialState: {
    items: [],
    // items:
    //   {
    //     cat_id: 0,
    //     cat_name: '',
    //     cat_parentId: 0,
    //   },
    // ],
  },
  reducers: {
    addDirectoryPath(state, action) {
      // state.items.push(action.payload);
    },
    changeDirectoryPath(state, action) {
      state.items.splice(state.items.length - 1, 1, action.payload);
      // // state.items > 0 && state.items.splice(items.length, 1);
      // // state.items.push(action.payload);
      // // const index = state.items ? state.items.length : 0;
      // const index = state.items.length - 1;
      // // index > 0
      // //   ? state.items.splice(index, 1, action.payload)
      // //   : state.items.push(action.payload);
      // state.items.splice(index, 1, action.payload);

      // console.log(state.items);
    },
    deleteDirectoryPath(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(index, 1);
    },
    deleteAllDirectoryPath(state, action) {
      state.items = action.payload;
    },
  },
});

export const { addDirectoryPath, changeDirectoryPath, deleteDirectoryPath, deleteAllDirectoryPath } = sliceDirectoryPath.actions;
export const directoryPathReducer = sliceDirectoryPath.reducer;
