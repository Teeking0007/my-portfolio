import './Navbar.css'
import { FaLinkedin, FaTwitter, FaBars } from 'react-icons/fa';
const Navbar = () => {
    return ( 
        
            <nav>
                <span>Oduola Timothy</span>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>
                <div className="icon">
                    <FaLinkedin/>
                    <FaTwitter style={{marginLeft: '10px'}}/>
                </div>
                
                
            </nav>
            
        
     );
}
 
export default Navbar;