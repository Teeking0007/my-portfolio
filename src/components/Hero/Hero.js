import Navbar from "../Navbar/Navbar";
import './Hero.css';
import teeking from '../../assests/teeking.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

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
                            <FaLinkedin/>
                            <FaTwitter style={{marginLeft: '10px'}}/>
                        </div>
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