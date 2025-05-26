import { RootState } from '@/redux/store';
import { Extra, Size } from '@prisma/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//---------------------------------------------------------
//  for type safty for TS to determine the features of cart 
export type CartItem = {
  name: string,
  id: string,
  image: string,
  basePrice: number,
  quantity?: number,
  size?: Size,
  extra?: Extra[] 
}
type cartState = {
  items: CartItem[]
}
//--------------------------------------------------------
// if there are items in cart return this items and display it and if i press refresh not elemenate this items and if no items return []
// it will happen by goto 'CartItem.tsx' file and write: useEffect(() => { localStorage.setItem('cartItems', JSON.stringify(cart)) }, [cart])
const initialCartItems = localStorage.getItem('cartItems')
const initialState: cartState = {
  items: initialCartItems ? JSON.parse(initialCartItems): []
} 

export const cartSlice = createSlice({
  name: 'cart' ,
  initialState ,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + 1;
        existingItem.size = action.payload.size;
        existingItem.extra = action.payload.extra;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItemFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          item.quantity! -= 1;
        }
      }
    },
    deleteItemFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items = state.items.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearCart: (state) => {
      state.items = [];
    },

  }
})

export const {addItemToCart , removeItemFromCart , deleteItemFromCart} = cartSlice.actions; 


// export cartReducer cartSlice.reducer
export default cartSlice.reducer

// aditional helper step as if i want to use this state in any other file i will write >>> useAppSelector(selectItemsOfCart)
export const selectItemsOfCart = (state: RootState) => state.cart.items