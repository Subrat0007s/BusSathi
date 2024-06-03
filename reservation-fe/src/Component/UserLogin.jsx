import React from 'react';
import  '../Style/userloginn.css'

const UserLogin = () => {
    return (
        <div className='UserLogin'>   
        <form action="">
         <label htmlFor="">UserName</label>
         <input type="text" placeholder='Enter your UserName' />
         <label htmlFor="">Password</label>
         <input type="text" placeholder='Enter your Password' />
         <button className='btn btn-primary' >Login</button>
        </form>
     </div>
    );
}

export default UserLogin;
