import React from "react";
import products  from "../Components/Products";
import Mainpage from '../Pages/Mainpage';

const Items =()=>{
    return (<section>
          {
        products.map((item)=>{
        <Mainpage item={item} />
        console.log(item);

        })}

    </section>)
}

export default Items;
