import React, { useState } from 'react';
import "../Style/adminsignup.css"
import axios from 'axios';

const AdminSignUp = () => {

    let [name , setName] = useState("")
    let [email , setEmail] = useState("")
    let [phone , setPhone] = useState("")
    let [gst_number , setGstnumber] = useState("")
    let [travels_name , setTravels] = useState("")
    let [password , setPassword] = useState("")
    let data={
        name,email,phone,gst_number,travels_name,password
    }
    function admin(e) {
        e.preventDefault();
        axios.post('http://localhost:8088/api/admins',data)
        .then((res)=>
            {
                alert("Admin had Successfully sign-up! ");
                console.log(res);
            })
        .catch((err)=>
            {
                alert("Failed to add.");
                console.log(err);
            }
    )
    }
    return (
        <div className='adminsign' >
           <form action="" onSubmit={admin}>

            <label htmlFor="">Name</label>
             <input type="text" required placeholder='Enter the Name  ' value={name} onChange={(e)=>{setName(e.target.value)}} />
            <label htmlFor="">Phone</label>
             <input type="tel" required placeholder='Enter the Phone ' value={phone} onChange={(e)=>{setPhone(e.target.value)}} />
            <label htmlFor="">Gst Number</label>
             <input type="text" required placeholder='Enter the Gst_number ' value={gst_number} onChange={(e)=>{setGstnumber(e.target.value)}} />
            <label htmlFor="">Travels Name</label>
             <input type="text" required placeholder='Enter the  Travels name' value={travels_name} onChange={(e)=>{setTravels(e.target.value)}} />
            <label htmlFor="">Email</label>
             <input type="email" required placeholder='Enter the Email ' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <label htmlFor="">Password </label>
             <input type="password" required placeholder='Enter the Password ' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <button>Submit</button>
           </form>
        </div>
    );
}

export default AdminSignUp;
