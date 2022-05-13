import './Contact.css';
import { FaLinkedin, FaPhone, FaTwitter,  } from 'react-icons/fa';
import gmail from '../../assests/gmail.png';


const Contact = () => {
    return ( 
        <div className='c'>
            <div className='c-l'>
            <h2>Get in Touch.</h2>
               <p>Kindly forward all your enquiries to me</p>
               <div className="icons">
                    <FaLinkedin/>
                    <FaTwitter style={{marginLeft: '10px'}}/>
                </div>
                <div className='call-cc'>
                    <div className='call'>
                        <div> <FaPhone /> </div>    
                        <div className='call-text'>
                            <h4>+234 806 964 7802</h4>
                            <p>Call Avaliable 24/7</p>
                        </div>
                    </div>
                    <div className='call'>
                           <div> <img src={gmail} alt='gmail' style={{height: '15px', width: '15px'}}/> </div> 
                        <div className='call-text'>
                            <h4>timmyther02@gmail.com</h4>
                            <p>Send Message Anytime and Anywhere</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='c-r'>
                <form>
                    <p>Need A Service?</p>
                    <h2>Send A Message</h2>
                    <input type='text' placeholder='Enter your Name' />
                    <input type='text' placeholder='Enter your Subject' />
                    <input type='email' placeholder='Enter your Email' />
                    <textarea rows={10}/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
     );
}
 
export default Contact;