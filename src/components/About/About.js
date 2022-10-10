import './About.css';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import Resume from '../../assests/Resume.pdf'

const About = () => {
    return ( 
        <div className='about' id='about'>
            <h1>About Me</h1>
            <p>Oduola Timothy is a paasionate and goal driven 
                <br/>techprenuer whose interest is in using technology to 
                <br/> build solutions to solve real world problems
            </p>
            <div className="icons">
                <FaLinkedin/>
                <FaTwitter style={{marginLeft: '10px'}}/>
            </div>
            <a href={Resume} download><button>Download Resume</button></a>
        </div>
     );
}
 
export default About;