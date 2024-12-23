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
    // addDirectoryPath(state, action) {
    //   // state.items.push(action.payload);
    // },
    changeDirectoryPath(state, action) {
      const index = state.items.findIndex(item =>
        item.cat_id === action.payload.cat_parentId);
      
      index < 0 ? (state.items = []) : state.items.splice(index + 1);
      
      state.items.push(action.payload);
    },
    deleteDirectoryPath(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(index, 1);
    },
    deleteAllDirectoryPath(state, action) {
      // state.items = action.payload;
      state.items = [];
    },
  },
});

// export const { addDirectoryPath, changeDirectoryPath, deleteDirectoryPath, deleteAllDirectoryPath } = sliceDirectoryPath.actions;
export const { changeDirectoryPath, deleteDirectoryPath, deleteAllDirectoryPath } = sliceDirectoryPath.actions;
export const directoryPathReducer = sliceDirectoryPath.reducer;
