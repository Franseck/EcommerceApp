import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/ProductSlice'
import "../css/Product.css"

const ProductDetails = () => {
const {id} = useParams()
const {products, selectedProduct} = useSelector((store)=>store.product)

const { price, image, title, description} = selectedProduct;

const dispatch = useDispatch()

useEffect(() => {
getProductbyId()
}, [])

const getProductbyId =()=> {
    products && products.map((product)=>{
        if(product.id== id) {
dispatch(setSelectedProduct(product))
        }
    })
}
  return (
    <div className="detay">
        <div style={{marginRight:"2rem"}}>
            <img src={image} width={300} height={400}alt="" />
        </div>
        <div>
        <h2>{title}</h2>       
        <h3 style={{color:"grey"}}>{description}</h3>
        <h1 style={{color:"red"}}>${price}</h1> 
        </div>
        </div>
  )
}

export default ProductDetails