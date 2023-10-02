import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for a cart item
interface CartItem {
  id?: number;
  name: string;
  imageSrc: string;
  quantity: number;
  price: number;
}

// Create a cart slice
const cartSlice = createSlice({
  name: 'cart', // Name of the slice
  initialState: [] as CartItem[], // Initial state, an empty array representing an empty cart
  reducers: {
    // Reducer functions for handling actions
    addToCart: (state, action: PayloadAction<CartItem>) => {
      // Add an item to the cart or increment its quantity if it already exists
      const itemExists = state.find((item) => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
        // Increment the quantity of a specific item in the cart
        const item = state.find((item) => item.id === action.payload);
        if (item) {
            item.quantity++;
        }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
        // Decrement the quantity of a specific item in the cart or remove it if quantity reaches 1
        const item = state.find((item) => item.id === action.payload);
        if (item && item.quantity === 1) {
            const index = state.findIndex((item) => item.id === action.payload);
            state.splice(index, 1);
        } else if (item) {
            item.quantity--;
        }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      // Remove a specific item from the cart
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

// Extract the reducer and actions
export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;
