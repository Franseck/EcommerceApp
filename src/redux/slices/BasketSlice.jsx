import { createSlice } from '@reduxjs/toolkit'


const  getBasketfromStorage =()=>{
if (localStorage.getItem("basket")){
return JSON.parse(localStorage.getItem("basket"));
}
return [];
}


const initialState = {
products: getBasketfromStorage(),
drawer: false
}
const writeFromBasketToStorage =(basket)=>{
localStorage.setItem("basket" , JSON.stringify(basket))
}


export const BasketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
    addToBasket : (state,action)=>{
const findProduct = state.products && state.products.find((product)=>
product.id===action.payload.id);
if(findProduct){
const extractedProducts = state.products.filter((product)=> product.id!==action.payload.id );
findProduct.count += action.payload.count;
state.products = [...extractedProducts, findProduct]
}else {
    state.products = [...state.products , action.payload];
    writeFromBasketToStorage(state.products)
}
},
setDrawer: (state => {
    state.drawer = !state.drawer
    })
    }
    },

      )

      export const {  addToBasket , setDrawer} = BasketSlice.actions
      export default BasketSlice.reducer