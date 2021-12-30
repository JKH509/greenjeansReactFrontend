import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
// import customerReducer from '../features/customer/customerSlice';
import RootReducer from '../features/reducers/RootReducer';

export const store = configureStore({
  reducer: {
    RootReducer
  },
});
