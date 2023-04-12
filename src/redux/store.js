import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/DataSlice';
import CartSlice from './slices/CartSlice';

export const store = configureStore({
  reducer: {
    counterSlice,
    CartSlice,
  },
})