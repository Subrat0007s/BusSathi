import React from "react"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import AdminLogin from "./Component/AdminLogin"
import UserLogin from "./Component/UserLogin"
import AdminSignUp from "./Component/AdminSignUp"
import AdminHomePage from "./Component/AdminHomePage"
import UserSignup from "./Component/UserSignup";
import ResetPassword from "./Component/ResetPassword";
import UserHomepage from "./Component/UserHomepage";
import ProtectAdmin from "./Component/ProtectAdmin";
import ProtectUser from "./Component/ProtectUser";

import Navbar from "./Component/Navbar";

const App = () => {
    return (
        <div>
           <BrowserRouter>
           <Navbar/>
                <Routes>
                    {/* <Route element={<PageNotFound/>} path="/*"/> */}
                    {/* <Route element={<LandingPage/>} path="/"/> */}
                    <Route element={<AdminLogin/>} path="/adminlogin/*"/>
                    <Route element={<AdminSignUp/>} path="/adminsignup" />
                    <Route element={<ProtectAdmin Child={AdminHomePage}/>} path="/adminhomepage/*"></Route>
                    <Route element={<UserLogin/>} path="/userlogin"  />
                    <Route element={<UserSignup/>} path="/usersignup" />
                    <Route element={<ProtectUser Child={UserHomepage}/>} path="/userhomepage/*"/>
                    <Route element={<ResetPassword/>} path="/resetpassword"/>
                </Routes>
            </BrowserRouter> 
        </div>
    )
}
export default App