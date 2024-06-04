import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  '../Style/adminlogin.css'
import axios from 'axios';

const AdminLogin = () => {
    let [email , setEmail ] = useState("");
    let [password , setPassword ] = useState("");
    const navigate=useNavigate();

    function verify(e){
        e.preventDefault();
        axios.post(`http://localhost:8088/api/admins/verify-by-email?email=${email}&password=${password}`)
        .then((res)=>{
            navigate('/adminhomepage');
            alert("Login Successfull. ");
            console.log(res.data.data);
            localStorage.setItem("Admin",JSON.stringify(res.data.data));
        })
        .catch((err)=>{
            alert("Login Failed.")
        })
    }
    return (
        <div className='AdminLogin'>
            <form  onSubmit={verify} action="">
            <label  htmlFor="">Email: </label>
            <input type="email" placeholder='Enter your Email..' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <label htmlFor="">Password: </label>
            <input type="password" placeholder='Enter your Password..' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <button className='btn btn-primary' >Login</button>
           </form>
          <p> are you the new User ? <Link to="/adminsignup" >Register Here..</Link></p> 
        </div>
    );
}

export default AdminLogin ;
