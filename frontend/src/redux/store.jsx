import { configureStore } from '@reduxjs/toolkit';
import tokenSlice from './slices/tokenSlice';
import profileSlice from './slices/profileSlice';

const store = configureStore({
  reducer: {
    Auth: tokenSlice,
    User: profileSlice,
  },
});

export default store;
