import React, {useState} from "react";
import burger from "../Images/burger.jpeg"
import coke from "../Images/coke.jpeg"
import pepsi from "../Images/pepsi.jpeg"
import fries from "../Images/fries.jpeg"
import Shoppingnav  from '../Components/Shoppingnav';
import Items from "../Components/Items"
import products  from "../Components/Products";



const Mainpage =({item})=>{
    const [cart, setCart] = useState([])
    // const {name,price} = item;
    return (<>
       
    <Shoppingnav size={cart.length} />
    <Items/>

    <div className="mainpage-div-main">

    
    <div className="mainpage-div1">
        <img src={burger}  alt="burger" className="mainpage-image"/>
        <h5>Burger</h5>
        <p>Price: 200 </p>
        <div className="button-div">

        <button className="btn1">+</button> 
        <button className="btn2">-</button>
        </div>
    </div>


    
    <div className="mainpage-div1">
        <img src={fries}  alt="burger" className="mainpage-image"/>
        <h5>Fries</h5>
        <p>Price: 100 </p>
        <div className="button-div">

        <button className="btn1">+</button> 
        <button className="btn2">-</button>
        </div>
    </div>

    
    <div className="mainpage-div1">
        <img src={coke }  alt="burger" className="mainpage-image"/>
        <h5>Coke</h5>
        <p>Price: 50 </p>
        <div className="button-div">

        <button className="btn1" >+</button> 
        <button className="btn2">-</button>
        </div>
    </div>
    <div className="mainpage-div1">
        <img src={pepsi}  alt="burger" className="mainpage-image"/>
        <h5>Pepsi</h5>
        <p>Price: 50 </p>
        <div className="button-div">

        <button className="btn1" >+</button> 
        <button className="btn2">-</button>
        </div>
    </div>

    </div>

    </>)
}


export default Mainpage;