import { createSlice } from '@reduxjs/toolkit';

const ordersAllSlice = createSlice({
  name: 'ordersAll',
  initialState: {
    qualitity: 0,
  },
  reducers: {
    increaseOrder(state, action) {
      // state.items.push(action.payload);
      state.qualitity = action.payload++;
    },
    decreaseOrder(state, action) {
      // state.items.push(action.payload);
      state.qualitity > 0 ? state.qualitity = action.payload-- : state.qualitity = 0 ;
    },

    // addOrders(state, action) {
    //   state.items.push(action.payload);
    // },
    // deleteOrders(state, action) {
    //   const index = state.items.findIndex(item => item.id === action.payload);
    //   state.items.splice(index, 1);
    // },
  },
});

export const { increaseOrder, decreaseOrder } = ordersAllSlice.actions;
export const ordersAllReducer = ordersAllSlice.reducer;
