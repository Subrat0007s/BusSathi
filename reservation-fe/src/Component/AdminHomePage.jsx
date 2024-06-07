import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDashBoard from './AdminDashBoard'
import AdminNavBar from './AdminNavBar'
import AddBus from './AddBus'
import ViewAllBus from './ViewAllBus'
import EditBus from './EditBus'

function AdminHomePage() {
  return (
    <div>
        <AdminNavBar/>
        <Routes>
            <Route path='/' element={<AdminDashBoard/>}></Route>
            <Route path='/addbus' element={<AddBus/>}></Route>
            <Route path='/viewbus' element={<ViewAllBus/>}/>
            <Route path='/editbus/:id' element={<EditBus/>}/>
        </Routes>
    </div>
  )
}

export default AdminHomePage