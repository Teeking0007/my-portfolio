import './Skills.css';
import { FaHtml5, FaReact, FaWordpress, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiSolidity } from 'react-icons/si';




const Skills = () => {
    return ( 
        <div className="skills" id='skills'>
            <h1>My Skills</h1>
            <p>Here are some skill I have</p>
            <div className='card-container'>
            <div className='skills-card'>
                    <div className='card-icons'>
                        <FaReact/>
                    </div>
                    <div className='card-text'>
                       <h2> React JS </h2> 
                       <div className="bar" >
                            <div className="inner-bar"></div>
                        </div>
                    </div>
                </div>
                <div className='skills-card'>
                    <div className='card-icons'>
                        <FaWordpress/>
                    </div>
                    <div className='card-text'>
                       <h2> WordPress </h2> 
                       <div className="bar" >
                            <div className="inner-bar"></div>
                        </div>
                    </div>
                </div>
                <div className='skills-card'>
                    <div className='card-icons'>
                    <SiJavascript/>
                    </div>
                    <div className='card-text'>
                       <h2> JavaScript </h2> 
                       <div className="bar" >
                            <div className="inner-bar"></div>
                        </div>
                    </div>
                </div>
                <div className='skills-card'>
                    <div className='card-icons'>
                        <FaHtml5/>
                    </div>
                    <div className='card-text'>
                       <h2> HTML </h2> 
                       <div className="bar" >
                            <div className="inner-bar"></div>
                        </div>
                    </div>
                </div>
                <div className='skills-card'>
                    <div className='card-icons'>
                        <SiSolidity/>
                    </div>
                    <div className='card-text'>
                       <h2> Solidity </h2> 
                       <div className="bar" >
                            <div className="inner-bar"></div>
                        </div>
                    </div>
                </div>
                <div className='skills-card'>
                    <div className='card-icons'>
                        <FaFigma/>
                    </div>
                    <div className='card-text'>
                       <h2> Web Design </h2> 
                       <div className="bar" >
                            <div className="inner-bar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;