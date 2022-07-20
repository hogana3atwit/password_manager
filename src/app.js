import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header.js";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/createAccount";
import Home from "./pages/home";
import landingPage from './pages/landingPage';
import passwordGenerator from './pages/passwordGenerator'
import  passwordList  from './pages/passwordList';
import "./App.css";



function App() {
  return (
    <>
      <Router>
        <div className="app_main">
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={ <landingPage /> } />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path ="/generator" element={<passwordGenerator />} />
            <Route path ="/list" element={<passwordList />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
