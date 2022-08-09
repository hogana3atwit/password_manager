import React from 'react';
import HeaderLogo from '../images/compLogo.png'
import { Link} from 'react-router-dom'
import './css/header.css'


function Header() {

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'> <img className="compLogo" src={HeaderLogo} alt="Company Logo"></img> </Link>
      </div>
      <div className='headerMenu'>
      <ul className='headerUL'>  
          <>
          <li id='headerli'>
              <Link to='/about'>
                About
              </Link>
            </li>
            <li id='headerli'>
              <Link to='/login'>
                Login
              </Link>
            </li>
            <li id='headerli'>
              <Link to='/register'>
                Register
              </Link>
            </li>
          </>
      </ul> 
      </div>
    </header>
  )
}

export default Header