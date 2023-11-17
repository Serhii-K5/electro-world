import { createSlice } from "@reduxjs/toolkit";

const sliceOrder = createSlice({
  name: "orders",
  initialState: {
    items: [],
  },
  reducers: {
    addOrders(state, action) {
      state.items.push(action.payload);
    },
    deleteOrders(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const { addOrders, deleteOrders } = sliceOrder.actions;
export const orderReducer = sliceOrder.reducer;
