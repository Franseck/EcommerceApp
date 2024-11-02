import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/ProductSlice'
import "../css/Product.css"
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

const ProductDetails = () => {
const {id} = useParams()
const {products, selectedProduct} = useSelector((store)=>store.product)

const { price, image, title, description} = selectedProduct;

const [count, setCount] = useState(0)
const increment =()=> {
    setCount(count +1)
}
const decrement =()=> {
    setCount(count - 1)
}
const addBasket =()=>{
    const payload ={
        id, price, image, title, description, count
    }
}
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

        <div className='adet' style={{display:"flex" , alignItems:"center" , textAlign:"center"}}>
        <FaPlusSquare onClick={increment} style={{fontSize:"2rem", marginRight:"0.8rem", cursor:"pointer"}} /> <span  style={{fontSize:"1.5rem", marginRight:"0.8rem"}}>{count}</span> <FaMinusCircle onClick={decrement} style={{fontSize:"2rem", cursor:"pointer"}} />
        </div>

        <div>
<button onClick={addBasket} className='detail' style={{marginTop:"1.2rem"}}>Add to Cart</button>
        </div>

        </div>
        </div>
  )
}

export default ProductDetails