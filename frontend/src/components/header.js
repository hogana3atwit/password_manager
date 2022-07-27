import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import compLogo from '../images/compLogo.png';
import './css/header.css'


function Header()
    {
        return(
            <header className ="header">
                    <div className="navBar_left">
               <img className="complogo" src={compLogo} alt="Spartan Logo" /> 
                    </div>
                    <div className="navBar_middle">
 
                    </div>
                    <div className="navBar_right">
                        <ul>
                            <li>ABOUT</li>
                            <li> LOGIN </li>
                            <li><button className="headerNavButton"> JOIN </button></li>
                        </ul>
                    </div>
            </header>
        )
    }

    export default Header