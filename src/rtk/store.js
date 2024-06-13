import { configureStore } from '@reduxjs/toolkit' ; 
import ProductsSlice from './slices/product_slice' ; 
import CartSlice  from './slices/cart_slice';

export const store = configureStore({
    reducer: {
        Products : ProductsSlice ,
        Cart : CartSlice ,    
    },
})
