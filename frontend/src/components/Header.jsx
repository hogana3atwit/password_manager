import React from 'react'
import HeaderLogo from '../images/compLogo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import './css/header.css'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
      <Link to='/'> <img className="compLogo" src={HeaderLogo} alt="Company Logo"></img> </Link>
      </div>
      <div id='headerMenu'>
      <ul className='headerMenuUL'>
        {user ? (
          
         <>
        
        <li>
              <Link to='/about'>
                 About
              </Link>
            </li>
        
        <li>
            <button className='btn' onClick={onLogout}>
     Logout
            </button>
          </li>
      
       </>
      ) : (
          <>
            <li>
              <Link to='/about'>
                 About
              </Link>
            </li>
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
