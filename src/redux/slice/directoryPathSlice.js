import { createSlice } from "@reduxjs/toolkit";

const sliceDirectoryPath = createSlice({
  name: 'directoryPath',
  initialState: {
    items: [],
  },
  reducers: {
    addDirectoryPath(state, action) {
      state.items.push(action.payload);
    },
    deleteDirectoryPath(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const { addDirectoryPath, deleteDirectoryPath } = sliceDirectoryPath.actions;
export const directoryPathReducer = sliceDirectoryPath.reducer;
