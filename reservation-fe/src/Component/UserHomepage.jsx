import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserDashBoard from './UserDashBoard'
import UserNavBar from './UserNavBar'
import EditUserDetails from './EditUserDetails'
import Bookings from './Bus Component/Bookings'

const UserHomepage = () => {
  return (
    <div>
        <UserNavBar/>
        <Routes>
            <Route path='/' element={<UserDashBoard/>}/>
            <Route path='/edituserdetails' element={<EditUserDetails/>}/>  
            <Route path="/bookings" element={<Bookings />} />
        </Routes>
    </div>
  )
}

export default UserHomepage