import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const initialState = {
  counter: 0,
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;
