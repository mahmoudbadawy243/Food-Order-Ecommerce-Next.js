import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
})


// return type of this state to fit TypeScript
export type RootState = ReturnType<typeof store.getState>

// return type of action to fit TypeScript
export type AppDispatch = typeof store.dispatch