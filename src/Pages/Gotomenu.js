import React from "react";
import  Navbar  from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';

const Gotomenu=()=>{
    const navigate = useNavigate();
    const handleMenu=()=>{
       navigate("/mainpage")
    }    


    return (<>
    <Navbar/>
    <div className="gotomenu-div" >
    <h2>Welcome to Food's Kitchen</h2>
    <button className="btn1" onClick={handleMenu}> GO TO MENU</button>
    </div>
    </>)
}

export default Gotomenu;