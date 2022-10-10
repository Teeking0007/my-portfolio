import Navbar from "../Navbar/Navbar";
import './Hero.css';
import teeking from '../../assests/teeking.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-scroll'

const Hero = () => {
    return ( 
        <div className="hero">
            <Navbar />
            <div className="hero-contents">
                <div className="hero-left">
                    <div className="text">
                        <p>Hello There</p>
                        <h5>I am Oduola Timothy</h5>
                        <h4>A Top-Notch Web Designer, <br/> Frontend Developer and Web3 Developer</h4>
                        <div className="icons">
                        <a href='https://www.linkedin.com/in/oduola-timothy/' target='_blank' rel='noreferrer' ><FaLinkedin/></a>
                        <a href='https://twitter.com/teeking007' target='_blank' rel='noreferrer' ><FaTwitter style={{marginLeft: '10px'}}/></a>
                        </div>
    
                            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100}>
                            <button className="hero-button">Hire Me</button>
                            </Link>
                        


                        
                    </div>
                </div>
                <div className="hero-right">
                    
                    <img src={teeking} alt='pp'  />
                    
                    
                </div>
            </div>
        </div>
     );
}
 
export default Hero;