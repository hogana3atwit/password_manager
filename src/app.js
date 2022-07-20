import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header.js";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/createAccount";
import Home from "./pages/home";
import LandingPage from './pages/landingPage';
import PasswordGenerator from './pages/passwordGenerator'
import PasswordList  from './pages/passwordList';
import "./App.css";



function App() {
  return (
    <>
      <Router>
        <div className="app_main">
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={ <LandingPage /> } />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path ="/generator" element={<PasswordGenerator />} />
            <Route path ="/list" element={<PasswordList />} />
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
