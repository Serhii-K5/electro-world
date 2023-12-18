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
      state.items.push(action.payload);
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

export const { addDirectoryPath, deleteDirectoryPath, deleteAllDirectoryPath } = sliceDirectoryPath.actions;
export const directoryPathReducer = sliceDirectoryPath.reducer;
