import React, { useState } from 'react';
import  '../Style/userloginn.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {
    let [email , setEmail ] = useState("");
    let [password , setPassword ] = useState("");
    const navigate=useNavigate();

    function verify(e) {
        e.preventDefault();
        axios.post(`http://localhost:8088/api/users/verify-by-email?email=${email}&password=${password}`)
        .then((res)=>{
            navigate('/userhomepage');
            alert("Login Successfull. ");
        })
    }
    return (
        <div className='UserLogin'>   
            <form action="" onSubmit={verify}>
                <label htmlFor="">Email: </label>
                <input type="email" placeholder='Enter your Email..' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <label htmlFor="">Password: </label>
                <input type="text" placeholder='Enter your Password..' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <button className='btn btn-primary'>Login</button>
            </form>
            <p> Are you the new User ? <Link to="/usersignup" >Register Here..</Link></p> 
        </div>
    );
}

export default UserLogin;
