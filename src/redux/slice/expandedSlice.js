import { createSlice } from "@reduxjs/toolkit";

const sliceExpanded = createSlice({
  name: 'expanded',
  initialState: {
    items: {},
  },
  reducers: {
    changeExpanded(state, action) {
      state.expanded = action.payload
    //   state.expanded = prevState => ({
    //     ...prevState,
    //     [action.payload]: !prevState[action.payload],
    //   })
    },
  },
});

export const { changeExpanded } = sliceExpanded.actions;
export const expandedReducer = sliceExpanded.reducer;
