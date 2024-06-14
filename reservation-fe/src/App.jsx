import React from "react"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import AdminLogin from './Component/Admin Component/AdminLogin'

import AdminSignUp from './Component/Admin Component/AdminSignUp'
import ProtectAdmin from './Component/Admin Component/ProtectAdmin'
import AdminHomePage from './Component/Admin Component/AdminHomePage'


import ResetPassword from "./Component/ResetPassword";


import ProtectUser from "./Component/ProtectUser";
import PageNotFound from "./Component/PageNotFound";

import UserSignup from "./Component/User Component/UserSignup";
import UserLogin from "./Component/User Component/UserLogin";
import UserHomepage from "./Component/User Component/UserHomepage";
import LandingPage from "./Component/LandingPage";
import BookBus from "./Component/Bus Component/BookBus";

const App = () => {
    return (
        <div>
           <BrowserRouter>
           
                <Routes>
                    <Route element={<PageNotFound/>} path="/*"/>
                    <Route element={<LandingPage/>} path="/"/>
                    <Route element={<AdminLogin/>} path="/adminlogin/*"/>
                    <Route element={<AdminSignUp/>} path="/adminsignup" />
                    <Route element={<ProtectAdmin Child={AdminHomePage}/>} path="/adminhomepage/*"></Route>
                    <Route element={<UserLogin/>} path="/userlogin/*"  />
                    <Route element={<UserSignup/>} path="/usersignup" />
                    <Route element={<ProtectUser Child={UserHomepage}/>} path="/userhomepage/*"/>
                    <Route element={<ResetPassword/>} path="/resetpassword"/>
                    <Route element={<BookBus/>} path="/bookbus"/>
                </Routes>
            </BrowserRouter> 
        </div>
    )
}
export default App