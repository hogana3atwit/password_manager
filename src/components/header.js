import React from "react";
import "./css/header.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../auth/authSlice";
import LegionLogo from '../images/legion_logo.png'

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="header">
      <div className="header_logo">
        <Link to="/"> <img className= "header_logo_image" src={LegionLogo} /> </Link>
      </div>
      <div className = "header_main_Menu">
      <ul>
        {user ? (
          <>
            <li>
              <Link to="/about"> About </Link>
            </li>

            <li>
              <button className="btn" onClick={onLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
      </div>
    </div>
  );
}

export default Header;
