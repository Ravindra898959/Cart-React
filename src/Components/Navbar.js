import React from "react";
import { FaUtensils } from "react-icons/fa";

const Navbar=()=>{
    return(<>
              <nav className='main-header'>
        <FaUtensils style={{color:'white', fontSize:'larger', cursor:'pointer'}} />
        <h2 style={{cursor:'pointer'}}>Food's Restaurant</h2>
        </nav>
    </>)
}


export default Navbar;