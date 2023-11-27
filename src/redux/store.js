import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slice/productSlice';
import { orderReducer } from './slice/orderSlice';
import { ordersAllReducer } from './slice/ordersAllSlice';
// import formReducer from './sliceForm';

const ordersPersistConfig = {
  key: 'orders',
  storage,
};

const numberPurchasesPersistConfig = {
  key: 'purchases',
  storage,
};

export const store = configureStore({
  reducer: {
    products: productsReducer,
    orders: persistReducer(ordersPersistConfig, orderReducer),
    ordersAll: persistReducer(numberPurchasesPersistConfig, ordersAllReducer),
    // form: formReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';
// import formReducer from './formSlice';

// const store = configureStore({
//   reducer: {
//     form: formReducer,
//   },
// });

// export default store;
