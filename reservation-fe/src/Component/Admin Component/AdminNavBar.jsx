import React from 'react'
import AdminDropDowns from './AdminDropDowns'
import styles from './adminnavbar.module.css' // Import the CSS module

function AdminNavBar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <h1><i>BusSathi</i><sup><i>.com</i></sup> </h1>
        </div>
        <div className={styles.dropdown}>
            <AdminDropDowns/>
        </div>
    </div>
  )
}

export default AdminNavBar
