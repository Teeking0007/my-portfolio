import './Footer.css'
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return ( 
        <div className='f'>
            <h2>Oduola Timothy</h2>
            <div className="icons">
                <FaLinkedin/>
                <FaTwitter style={{marginLeft: '10px'}}/>
            </div>
            <p>Copyright &copy; 2022 | All rights Reserved</p>
        </div>
     );
}
 
export default Footer;