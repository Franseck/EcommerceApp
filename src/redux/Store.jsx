import { configureStore } from '@reduxjs/toolkit'
import AppReducer from "../redux/slices/AppSlice"
import ProductReducer from "../redux/slices/ProductSlice"

export const store = configureStore({
  reducer: {
    app : AppReducer,
    product : ProductReducer
  },
})