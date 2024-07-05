import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './usersignup.module.css';
import UniversalNav from './UniversalNav';

const UserProfile = () => {
    let { id } = useParams();
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [phone, setPhone] = useState("");
    let [email, setEmail] = useState("");
    let [gender, setGender] = useState("");
    let [password, setPassword] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8088/api/users/${id}`)
            .then((res) => {
                const userData = res.data;
                setName(userData.name);
                setAge(userData.age);
                setPhone(userData.phone);
                setEmail(userData.email);
                setGender(userData.gender);
            })
            .catch((err) => {
                console.error(err);
                alert("Failed to fetch user data");
            });
    }, [id]);

    let data = { name, age, phone, email, gender, password };

    function update(e) {
        e.preventDefault();
        axios.put(`http://localhost:8088/api/users/${id}`, data)
            .then((res) => {
                alert("User Updated Successfully");
                console.log(res);
            })
            .catch((err) => {
                alert("Failed to Update Profile");
                console.error(err);
            });
    }

    return (
        <div>
            <UniversalNav />
            <div className={styles.usersign}>
                <form onSubmit={update} className={styles.form}>
                    <p className={styles.heading}>Update Profile</p>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="name">Name: </label>
                        <input type="text" id="name" required placeholder="Enter the Name" className={styles.inputField} value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="phone">Phone: </label>
                        <input type="tel" id="phone" required placeholder="Enter the Phone" className={styles.inputField} value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="email">Email: </label>
                        <input type="email" id="email" required placeholder="Enter email address" className={styles.inputField} value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="age">Age: </label>
                        <input type="tel" id="age" required placeholder="Enter your Age" className={styles.inputField} value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="gender">Gender: </label>
                        <input type="text" id="gender" required placeholder="Enter your Gender" className={styles.inputField} value={gender} onChange={(e) => setGender(e.target.value)} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="password">Password: </label>
                        <input type="password" id="password" required placeholder="Enter your Password" className={styles.inputField} value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className={styles.button}>Update Profile</button>
                </form>
            </div>
        </div>
    );
};

export default UserProfile;
