import React from 'react'
import AdminDropDowns from './AdminDropDowns'
import "../Style/adminnavbar.css"
function AdminNavBar() {
  return (
    <div className="navbar">
        <div className="logo">
            <h1><i>BusSathi</i><sup><i>.com</i></sup> </h1>
        </div>
        <div className="option">
            <AdminDropDowns/>
        </div>
    </div>
  )
}

export default AdminNavBar