import React from 'react'
import UserDropDown from './UserDropDown'
import styles from '../Admin Component/adminnavbar.module.css'
const UserNavBar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <h1><i>BusSathi</i><sup><i>.com</i></sup> </h1>
        </div>
        <div className={styles.option}>
            <UserDropDown/>
        </div>
    </div>
  )
}

export default UserNavBar