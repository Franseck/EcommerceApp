import React from 'react'
import "../css/Product.css"


const Product = ({product}) => {
    const {id, price, image, title, description} = product;

    return (
        <div className='cards'>
        <img className="image" src={image} alt="" />
        <div>
            <p style={{textAlign:"center", height:"3rem"}}>{title}</p>
            <h3 style={{textAlign:"center"}}>{price}</h3>
          </div>
<div className='flex-row'> 
    <button className='detail'>Urun Detayi</button>
</div>

</div>


      );
}

export default Product