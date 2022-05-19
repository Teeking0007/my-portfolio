import React, { useState } from 'react';
import './Navbar.css'
import { FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const mobileHandler = () => {
        console.log('im clicked')
        setToggle(!toggle);
    }

    return ( 
        
            <nav>
                <div className='logo'>Oduola Timothy</div>
                <div className={toggle?'nav-con' : 'nav-con closed'}>
                    <ul className='nav-child'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Services</li>
                    </ul>
                    <div className="icon">
                        <FaLinkedin/>
                        <FaTwitter style={{marginLeft: '10px'}}/>
                    </div>
                </div>
                <div className='mobile-icon' onClick={mobileHandler} >
                    {toggle? <FaTimes/> : <FaBars/> }
                </div>
                
            </nav>
            
        
     );
}
 
export default Navbar;