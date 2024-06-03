import React from "react"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage  from "./Component/LandingPage"
import AdminLogin from "./Component/AdminLogin"
import UserLogin from "./Component/UserLogin"
import AdminSignUp from "./Component/AdminSignUp"
import AdminHomePage from "./Component/AdminHomePage"
import PageNotFound from "./Component/PageNotFound"

const App = () => {
    return (
        <div>
           <BrowserRouter>
                <Routes>
                    <Route element={<PageNotFound/>} path="/*"/>
                   <Route element={<LandingPage/>} path="/"/>
                   <Route element={<AdminLogin/>} path="/adminlogin"/>
                   <Route element={<UserLogin/>} path="/userlogin"  />
                   <Route element={<AdminSignUp/>} path="/adminsignup" />
                   <Route element={<AdminHomePage/>} path="/adminhomepage/*"></Route>
                </Routes>
            </BrowserRouter> 
        </div>
    )
}
export default App