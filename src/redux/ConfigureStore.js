import { configureStore } from '@reduxjs/toolkit';
import currenciesReducer from './Coincap.js';

const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
  },
});

export default store;
