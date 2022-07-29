import './css/about.css'
import AboutPic from '../images/shield.png'

function About() {
        return(
            <div className='aboutContainer'>
                <div className='aboutLeft'>
                <img className="aboutPicShield" src={AboutPic} alt="Spartan Logo" /> 
                </div>
                <div className='aboutRight'>
              <h1> ABOUT </h1>
              <p> LEGION is a project developed by Powered by Spartan. PBS is the brain child of a group of Wentworth Insiute of Technoloygy students. LEGION is a password manager modeled after many of the others currenly <br/>  in the market but built to be more efficient.</p>
                </div>
            </div>
        )
}

export default About