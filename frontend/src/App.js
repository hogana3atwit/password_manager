import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from './components/header'
import About from "./pages/about";
import Login from "./pages/login";
import './App.css'

function App() {
  return (  
    <>
    
    <Router>
    <Header />
      <div className="container">
        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
    <ToastContainer />
  </>
 );
}

export default App;
