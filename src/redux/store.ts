/* eslint-disable max-len */
import { configureStore, Action } from '@reduxjs/toolkit';
import rootReducer from './slices/rootSlice';

const store = configureStore({
  reducer: {
    rootReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsAPI.middleware),
});

export default store;