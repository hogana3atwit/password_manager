import React from 'react';
import Header from "./components/header"
import Login from "./pages/loginPage";
import LandingPage from './pages/landingPage';
import Register from './pages/registerPage';
import DashboardPage from './pages/dashboardPage'
import AboutPage from './pages/aboutPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
<Router>
      <Header />
        <div className="container">
          <Routes> 
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/about" element={<DashboardPage />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
