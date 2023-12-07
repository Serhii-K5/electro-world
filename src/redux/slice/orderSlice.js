import { createSlice } from "@reduxjs/toolkit";

const sliceOrder = createSlice({
  name: 'orders',
  initialState: {
    items: [],
  },
  reducers: {
    addOrders(state, action) {
      state.items.push(action.payload);
    },
    deleteOrders(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(index, 1);
    },
    updateOrders(state, action) {
      console.log(action.payload);

      const index = state.items.findIndex(item => item.id === action.payload.id);
      state.items.splice(index, 1, action.payload);
    },
    deleteAllOrders(state, action) {
      state.items = action.payload;
    },
  },
});

export const { addOrders, deleteOrders, updateOrders, deleteAllOrders } = sliceOrder.actions;
export const orderReducer = sliceOrder.reducer;
