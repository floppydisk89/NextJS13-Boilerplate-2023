import { configureStore } from '@reduxjs/toolkit';
import userSessionReducer from './slices/userSession';

const store = configureStore({
  reducer: {
    userSession: userSessionReducer,
  },
});

export default store;
