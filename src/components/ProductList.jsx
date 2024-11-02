import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/ProductSlice'
import Product from './Product'

const ProductList = () => {

const dispatch = useDispatch()
const {products} = useSelector((store)=> store.product)

useEffect(()=>{
dispatch(getAllProducts())
},[])

  return (
    <div className='flex-row' style={{flexWrap:'wrap', marginTop:"1.2rem"}}>
      {
        products && products.map((product)=>(
          <Product key={product.id} product={product}/>
        ))
      }
    </div>
  )
}

export default ProductList