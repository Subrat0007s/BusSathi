import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserDashBoard from './UserDashBoard'
import AdminNavBar from './AdminNavBar'

const UserHomepage = () => {
  return (
    <div>
        <AdminNavBar/>
        <Routes>
            <Route path='/' element={<UserDashBoard/>}/>
            
        </Routes>
    </div>
  )
}

export default UserHomepage