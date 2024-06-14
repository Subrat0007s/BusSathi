import React from 'react'
import styles from './Admin Component/adminnavbar.module.css'

import LoginOption from './LoginOption'
const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <h1><i>BusSathi</i><sup><i>.com</i></sup> </h1>
            </div>
            <div className={styles.dropdown}>
                <LoginOption/>
            </div>
        </div>
      )
}

export default Navbar

