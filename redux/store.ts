import { configureStore, combineReducers, Reducer } from '@reduxjs/toolkit';
import { cartReducer } from './cart.slice';

// Define the type for your Redux state
interface RootState {
  cart: ReturnType<typeof cartReducer>;
}

// Combine reducers using combineReducers
const rootReducer: Reducer<RootState> = combineReducers({
  cart: cartReducer,
});

// Configure the Redux store with the combined reducer
const store = configureStore({
  reducer: rootReducer, // Pass the combined rootReducer to configureStore
});

export default store;
