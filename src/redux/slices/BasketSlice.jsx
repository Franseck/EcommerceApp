import { createSlice } from '@reduxjs/toolkit'

const initialState = {
products: [],

}

export const BasketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
    
    },

      })

      export const {   } = BasketSlice.actions
      export default BasketSlice.reducer