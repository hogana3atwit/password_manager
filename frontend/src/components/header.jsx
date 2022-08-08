import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import compLogo from '../images/compLogo.png';
import './css/header.css'

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    console.log("Hit Log out button Header")
    dispatch(reset());
    console.log("Hit Reset button Header")
    navigate("/");
  };

  

  return (
    
    <header className="header">
      <div className="logo">
        <Link to="/"><img className="complogo" src={compLogo} alt="Spartan Logo" /> </Link>
      </div>
    <div className="menuSection">
    <ul>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
         Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                  Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                  Register
              </Link>
            </li>
          </>
        )}
      </ul>
      </div>
    </header>
    
  )
}

export default Header
