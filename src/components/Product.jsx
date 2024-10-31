import React from 'react'
import "../css/Product.css"
import { useNavigate } from 'react-router-dom';


const Product = ({product}) => {
    const {id, price, image, title, description} = product;

    const navigate = useNavigate();

    return (
        <div className='cards'>
        <img className="image" src={image} alt="" />
        <div>
            <p style={{textAlign:"center", height:"3rem"}}>{title}</p>
            <h3 style={{textAlign:"center"}}>${price}</h3>
          </div>
<div className='flex-row'> 
    <button onClick={()=>navigate("/product-details/" + id)} className='detail'>Details</button>
</div>

</div>


      );
}

export default Product