import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from "../Style/usersignup.module.css"
const UserSignup = () => {
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [phone, setPhone] = useState("");
    let [email, setEmail] = useState("");
    let [gender, setGender] = useState("")
    let [password, setPassword] = useState("");
    let data = {
        name, age, phone, email, gender, password
    }
    function save(e) {
        e.preventDefault();
        axios.post('http://localhost:8088/api/users', data)
            .then((res) => {
                alert("Admin Added Successfully")
                console.log(res);
            })
            .catch((err) => {
                alert("Failed to Sign-up");
                console.error(err);
            })
    }
    let navigate = useNavigate();
    return (
        <div class="form-box" onSubmit={save}>
            <form class="form">
                <span class="title">Sign up</span>
                <span class="subtitle">Create a free account.</span>
                <div class="form-container">
                    <label htmlFor="">Name</label>
                    <input type="text" required placeholder='Enter the Name  ' value={name} onChange={(e) => { setName(e.target.value) }} />
                    <label htmlFor="">Phone: </label>
                    <input type="tel" required placeholder='Enter the Phone ' value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                    <label htmlFor="">Email: </label>
                    <input type="email" name="" id="" placeholder='Enter email address..' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <label htmlFor="">Age: </label>
                    <input type="tel" name="" id="" placeholder='Enter your Age.' value={age} onChange={(e) => { setAge(e.target.value) }} />
                    <label htmlFor="">Gender: </label>
                    <input type="text" name="" id="" placeholder='Enter your Gender.' value={gender} onChange={(e) => { setGender(e.target.value) }} />
                    <label htmlFor="">Password: </label>
                    <input type="password" name="" id="" placeholder='Enter your Password.' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button>Sign up</button>
                <div class="form-section">
                    <p>Have an account?
                        <Link className={styles.button2} type="button" onClick={() => navigate('/userlogin')}>
                            Log-in
                        </Link>
                    </p>
                </div>
            </form>

        </div>
    )
}

export default UserSignup