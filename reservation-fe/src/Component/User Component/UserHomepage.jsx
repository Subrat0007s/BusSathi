import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserDashBoard from './UserDashBoard'
import UserNavBar from './UserNavBar'
import EditUserDetails from './EditUserDetails'
import BookBus from '../Bus Component/BookBus'

const UserHomepage = () => {
  return (
    <div>
        <UserNavBar/>
        <Routes>
            <Route path='/' element={<UserDashBoard/>}/>
            <Route path='/edituserdetails' element={<EditUserDetails/>}/>
            <Route path='/bookbus' element={<BookBus/>}/>
        </Routes>
    </div>
  )
}

export default UserHomepage