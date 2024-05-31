import React from 'react'
import DropDowns from './DropDowns'
import "../Style/adminnavbar.css"
function AdminNavBar() {
  return (
    <div className="navbar">
        <div className="logo">
            <h1><i>Yatra</i><sup><i>.in</i></sup> </h1>
        </div>
        <div className="option">
            <DropDowns/>
        </div>
    </div>
  )
}

export default AdminNavBar