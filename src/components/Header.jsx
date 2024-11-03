import React, { useState } from 'react';
import logo from "../assets/logo.png";
import "../css/Header.css";
import { IoIosBasket } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/BasketSlice';



const Header = () => {
    
    const navigate = useNavigate();
    const [theme,setTheme] = useState(false) 
    const changeTheme = ()=> {
const root = document.getElementById("root")
setTheme(!theme);
if(theme){
    root.style.backgroundColor="black";
    root.style.color ="#fff";
} else {
    root.style.backgroundColor="#fff";;
    root.style.color ="black";
}
    }

const dispatch = useDispatch()
const {products} = useSelector((store)=>store.basket);

  return (
    <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}} >
        <div className='flex-row' onClick={()=>navigate("/") }>
            <img className='logo' src={logo} alt=""/>
            <p className='logo-text'>Seckin Best Buy</p>
        
        </div>
<div className='flex-row'>
    <input className="search-input" type="text" placeholder='search'/>
    <div >
   

   {theme?  <FaMoon className='icon'onClick={changeTheme}/> : <IoSunny className='icon' onClick={changeTheme} />}
   <Badge onClick={()=>dispatch(setDrawer()) }  badgeContent={products.length} color="warning"  >
   <IoIosBasket className='icon' />
    </Badge>
    </div>
   
</div>
    </div>
  )
}

export default Header