import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from './components/header'
import './App.css'
import About from "./pages/about";
import LoginPage from './pages/login'
function App() {
  return (  
    <>
    
    <Router>
    <Header />
      <div className="container">
        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
    <ToastContainer />
  </>
 );
}

export default App;
