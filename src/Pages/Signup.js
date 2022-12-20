import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Navbar from "../Components/Navbar"

const Signup =()=>{
    const navigate = useNavigate();
    const [error, setError] = useState(true)
    const [data, setData] = useState({
        fullname:"",
        email: "",
        password:""
    });
    const handleSubmit =(e)=>{
         e.preventDefault()
         localStorage.setItem('email:',data.email)
         localStorage.setItem("password:", data.password)
         let minimumChar = 6;
        if (data.password.length<=minimumChar){
            setError("atleast 6 characters required")
         }
         else{
            setError('')
            navigate("/login") 
         } 
         
        //   console.log(data);
    } 
    const handleChange=(e)=>{
        
      setData({...data, [e.target.name]: e.target.value});
    }

  return (
    <>
        <Navbar />  

        <form className='form-div' onSubmit={(e)=>{handleSubmit(e)}} autoComplete="Off" >
            <h1>SignUp</h1>
            
            <label>  
                Full Name:
                <input type="text"  placeholder='Enter Email Id here' name='fullname' onChange={(e)=>{handleChange(e)}}  value={data.fullname} />
            </label>
            <label>  
                Email:
                <input type="email" required placeholder='Enter password here' name='email' onChange={(e)=>{handleChange(e)}}  value={data.email}  />
            </label>
            <label>  
                Password:
                <input type="password" placeholder='Enter password here again' name='password' onChange={(e)=>{handleChange(e)}} value={data.password} />
            </label>
            <div style={{color:'red'}}>{error}</div>
            <input type="submit" value="Submit" className='btn1' />

        </form>

    

    </>
  )
}

export default Signup;