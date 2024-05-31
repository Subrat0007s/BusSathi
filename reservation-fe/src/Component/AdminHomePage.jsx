import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDashBoard from './AdminDashBoard'
import AdminNavBar from './AdminNavBar'

function AdminHomePage() {
  return (
    <div>
        <AdminNavBar/>
        <Routes>
            <Route path='/' element={<AdminDashBoard/>}></Route>
        </Routes>
    </div>
  )
}

export default AdminHomePage