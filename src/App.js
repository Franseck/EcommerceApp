import React, { useEffect } from 'react'
import "./App.css"
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import Drawer from '@mui/material/Drawer';
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import { useDispatch, useSelector } from 'react-redux';
import { calculateBasket, setDrawer } from './redux/slices/BasketSlice';

const App = () => {
  const {products, drawer, totalAmount} =useSelector((store)=>store.basket)
  const dispatch = useDispatch()

  useEffect(()=>{
dispatch(calculateBasket())
  },[])


  return (
    <div>
      <PageContainer>
        <Loading/>
        <Header/>
        <RouterConfig/>
        <Drawer className='drawer' sx={{padding:"1.2rem"}} onClose={()=>dispatch(setDrawer())} anchor="right" open={drawer} > Proceed to Checkout
          {products &&products.map((product)=>{
            return (
              <div>
              <div className='flex-row' style={{padding:"1.2rem"}}>
                <img style={{marginRight:"7px"}} src={product.image} width={50} height={50} />
                <p style={{width:"20rem" , marginRight:"7px"}}>{product.title}({product.count})</p>
                <p style={{fontWeight:"bold" , marginRight:"10px" , width:"4rem"}} >{product.price}$</p>
<button style={{padding:"4px" , borderRadius:"5px", backgroundColor:"bisque" , color:"black" , width:"3rem"}} >Delete</button>
              </div>

          </div>
            )
          }) 

           }
  <div>
  <p>Subtotal : {totalAmount}</p>
</div>
      </Drawer>
      </PageContainer>

    </div>
  )
}

export default App