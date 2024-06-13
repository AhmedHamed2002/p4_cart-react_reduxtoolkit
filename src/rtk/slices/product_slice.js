import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit' ; 

export const fetchProducts = createAsyncThunk(
    'ProductsSlice/fetchProducts',
    async () => {
        const res =  await fetch('http://localhost:9000/products')  ;  
        const data  =  await res.json()   ;  
        return data  ; 
    },
)

export const ProductsSlice = createSlice({
    name: 'ProductsSlice',
    initialState:[],
    reducers: {

    } ,
    extraReducers:(builder) => {
        builder.addCase(fetchProducts.fulfilled , (state , actions) => {
            return actions.payload ; 
        })
    } ,
}) 

export const {} = ProductsSlice.actions ; 
export default ProductsSlice.reducer ; 