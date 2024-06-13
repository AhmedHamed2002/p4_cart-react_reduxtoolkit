import { createSlice} from '@reduxjs/toolkit' ; 

export const CartSlice = createSlice({
    name: "CartSlice" ,
    initialState: [] ,
    reducers: {
        addTocart : (state , actions) => {
            const findProduct  =  state.find((p) => p.id  == actions.payload.id ) ; 
            if(findProduct)
            {
                findProduct.quantity += 1 ;  
            }
            else{
                const add = {...actions.payload , quantity : 1} ;  
                return state  = [...state  , add] ; 
            }
        },
        deleteTocart:(state , actions) =>  {
            return  state.filter((product) => product.id != actions.payload.id) ;  
        } ,  
        clear: (state ,  actions) => {
            return []  ;  
        } , 
    } ,
    
}) 

export const {addTocart ,deleteTocart , clear} = CartSlice.actions ; 
export default CartSlice.reducer ; 