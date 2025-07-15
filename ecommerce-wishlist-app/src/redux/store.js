import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './slices/wishlistSlice';
import { localStorageMiddleware } from './persistenceMiddleware';

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});