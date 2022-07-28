import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './font.css';
import Home from '../src/Components/home/home';
import App from './appholder';
import { NavHeader } from './appholder.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PasswordGenerator, PasswordList } from "./appholder.js";

ReactDOM.render(
  <React.StrictMode>
    <Router>
	<Routes>
	<Route path="/" element={<Home/>}/>
	</Routes>
	<Routes>  
        <Route path="/Dashboard" element={<App/>}/>
	</Routes>
	<Routes>
	<Route path="/password-list" element={<PasswordList/>} />
	</Routes>
	<Routes>
	<Route path="/password-generator" element={<PasswordGenerator/>} />
	</Routes>
    </Router>
    </React.StrictMode>,
    document.getElementById('root')
   );

reportWebVitals();
