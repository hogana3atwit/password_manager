import React from 'react';
import Header from "./components/header"
import Login from "./pages/loginPage";
import LandingPage from './pages/landingPage';
import Register from './pages/registerPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
<Router>
      <Header />
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
