/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/index"
import "./App.css";
import User from "./Auth/Login";
// import Register from "./Login_Register/Register"
// import Account from "./Login_Register/User"
export default function App() {
  return (
    <BrowserRouter>
      <div className="mainPage">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<User />} />
          {/* <Route path="/Register" element={<Register />} /> */}
          {/* <Route path="/User" element={<Account/>}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
