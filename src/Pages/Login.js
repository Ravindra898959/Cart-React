import React, {useState} from "react";
import  Navbar  from '../Components/Navbar';
import { Link, useNavigate } from 'react-router-dom';

const Login =()=>{
    const navigate = useNavigate();
    const [data, setData] = useState({
        email:'',
        password:''
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (localStorage.getItem("email:") && localStorage.getItem("password:")){
            navigate("/gotomenu")
        }else{
            alert("you have to sign up first")
            navigate("/")
        }
    }
    const handleChange=(e)=>{
        console.log(e.target.value);
        setData({...data, [e.target.name]:e.target.value})
    }
    return(
    <>
    <Navbar/> 
    <div className="login-main-div" >

    
        <form className="form-div" onSubmit={handleSubmit} autoComplete="off" >
            <h1>LogIn</h1>
            
            <label>  
                Email:
                <input type="email" placeholder='Enter Email Id here' name='email' onChange={handleChange}  value={data.email} />
            </label>
            <label>  
                Password:
                <input type="password" placeholder='Enter password here' name='password' onChange={handleChange}  value={data.password}  />
            </label>
            <input type="submit" value="Login" className="btn1" />
            <Link to="/" style={{textDecoration:'none',color:'rgb(50, 50, 163)'}} >Create New Account</Link>

        </form>

        </div>
    </>
    )
} 
export default Login;