import { configureStore } from '@reduxjs/toolkit'
import AppReducer from "../redux/slices/AppSlice"
import ProductReducer from "../redux/slices/ProductSlice"
import BasketReducer from "../redux/slices/BasketSlice"

export const store = configureStore({
  reducer: {
    app : AppReducer,
    product : ProductReducer,
    basket : BasketReducer
  },
})