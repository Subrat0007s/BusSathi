import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDashBoard from './AdminDashBoard'
import AdminNavBar from './AdminNavBar'
import AddBus from './AddBus'

function AdminHomePage() {
  return (
    <div>
        <AdminNavBar/>
        <Routes>
            <Route path='/' element={<AdminDashBoard/>}></Route>
            <Route path='/addbus' element={<AddBus/>}></Route>
        </Routes>
    </div>
  )
}

export default AdminHomePage