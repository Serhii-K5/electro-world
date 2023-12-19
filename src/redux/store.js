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
import { languagesReducer } from './slice/languageSlice';
import { directoryPathReducer } from './slice/directoryPathSlice';
// import { catalogReducer } from './slice/catalogSlice';
// import { selectedElementReducer } from './slice/selectedElementSlice';
// import { ordersAllReducer } from './slice/ordersAllSlice';
// import formReducer from './sliceForm';

const ordersPersistConfig = {
  key: 'orders',
  storage,
};

const languagesPersistConfig = {
  key: 'languages',
  storage,
};

const directoryPathPersistConfig = {
  key: 'directoryPath',
  storage,
};

// const catalogReducerConfig = {
//   key: 'catalog',
//   storage,
// };

// const selectedElementConfig = {
//   key: 'selectedElement',
//   storage,
// };

export const store = configureStore({
  reducer: {
    products: productsReducer,
    orders: persistReducer(ordersPersistConfig, orderReducer),
    languages: persistReducer(languagesPersistConfig, languagesReducer),
    directoryPath: persistReducer(
      directoryPathPersistConfig,
      directoryPathReducer
    ),

    // path: persistReducer(ordersPersistConfig, orderReducer),
    // catalog: persistReducer(catalogReducerConfig, catalogReducer),
    // selectedElement: persistReducer(selectedElementConfig, selectedElementReducer),
    // rootReducer,
    // ordersAll: persistReducer(numberPurchasesPersistConfig, ordersAllReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
