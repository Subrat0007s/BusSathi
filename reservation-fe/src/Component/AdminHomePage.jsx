import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDashBoard from './AdminDashBoard'
import AdminNavBar from './AdminNavBar'
import AddBus from './AddBus'
import ViewAllBus from './ViewAllBus'

function AdminHomePage() {
  return (
    <div>
        <AdminNavBar/>
        <Routes>
            <Route path='/' element={<AdminDashBoard/>}></Route>
            <Route path='/addbus' element={<AddBus/>}></Route>
            <Route path='/viewbus' element={<ViewAllBus/>}/>
        </Routes>
    </div>
  )
}

export default AdminHomePage