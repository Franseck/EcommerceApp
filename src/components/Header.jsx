import React, { useState } from 'react';
import logo from "../assets/logo.png";
import "../css/Header.css";
import { IoIosBasket } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

const Header = () => {
    
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

  return (
    <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}} >
        <div className='flex-row'>
            <img className='logo' src={logo} alt=""/>
            <p className='logo-text'>Seckin Best Buy</p>
        
        </div>
<div className='flex-row'>
    <input className="search-input" type="text" placeholder='search'/>
    <div >
    <IoIosBasket className='icon' />
    {/**/}
   {theme?  <FaMoon className='icon'onClick={changeTheme}/> : <IoSunny className='icon' onClick={changeTheme} />}
    </div>
</div>
    </div>
  )
}

export default Header