import React from 'react'
import styles from '../Style/adminnavbar.module.css'
import LandingPage from './LandingPage'
const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <h1><i>BusSathi</i><sup><i>.com</i></sup> </h1>
            </div>
            <div className={styles.dropdown}>
                <LandingPage/>
            </div>
        </div>
      )
}

export default Navbar

