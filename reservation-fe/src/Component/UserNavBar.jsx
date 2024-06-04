import React from 'react'
import UserDropDown from './UserDropDown'

const UserNavBar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <h1><i>BusSathi</i><sup><i>.com</i></sup> </h1>
        </div>
        <div className="option">
            <UserDropDown/>
        </div>
    </div>
  )
}

export default UserNavBar