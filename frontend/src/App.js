import React from 'react';
import Login from "./pages/loginPage";
import Header from "./components/header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
<Router>
      <Header />
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
