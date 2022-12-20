import React from "react";
import {FaCartPlus, FaUtensils} from "react-icons/fa"
import { navigate, useNavigate } from 'react-router-dom';

const Shoppingnav =({size})=>{
    const navigate = useNavigate();
    const handlecart =()=>{
    navigate("/cart")
    }
    
    return(<>
           <nav className='main-header'>
        <FaUtensils style={{color:'white', fontSize:'larger', cursor:'pointer'}} />
        <h2 style={{cursor:'pointer'}}>Food's Restaurant</h2>
        <div className="cart-style">

        <FaCartPlus onClick={handlecart}/> <span>{size}</span>
        </div>
        </nav>
    </>)
}

export default Shoppingnav;