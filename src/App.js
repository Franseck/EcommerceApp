import React from 'react'
import "./App.css"
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import Drawer from '@mui/material/Drawer';
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import { useSelector } from 'react-redux';

const App = () => {
  const {products, drawer} =useSelector((store)=>store.basket)
  return (
    <div>
      <PageContainer>
        <Loading/>
        <Header/>
        <RouterConfig/>
        <Drawer sx={{padding:"1.2rem"}} onClose={()=>dispatch(setDrawer())} anchor="right" open={drawer} >
  Seckin
      </Drawer>
      </PageContainer>

    </div>
  )
}

export default App