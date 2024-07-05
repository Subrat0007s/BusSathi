import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserDashBoard from './UserDashBoard'
import UserNavBar from './UserNavBar'
import EditUserDetails from './EditUserDetails'

import UserProfile from './UserProfile'

const UserHomepage = () => {
  return (
    <div>
        <UserNavBar/>
        <Routes>
            <Route path='/' element={<UserDashBoard/>}/>
            <Route path='/edituserdetails' element={<EditUserDetails/>}/>  
            <Route path="/profile/:id" element={<UserProfile />} />
        </Routes>
    </div>
  )
}

export default UserHomepage