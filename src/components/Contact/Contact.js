import './Contact.css';
import { FaLinkedin, FaPhone, FaTwitter,  } from 'react-icons/fa';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import gmail from '../../assests/gmail.png';


const Contact = () => {
const formRef = useRef();
const [send, setSend] = useState(false);
const [form, setForm] = useState({
    name: '',
    subject: '',
    email: '',
    message: ''
})
const sumbit = (e) =>{
    e.preventDefault();
    emailjs.sendForm('teeking', 'template_9iheiib', formRef.current, 'JLBY-w0xGtDoJKwv3')
      .then((result) => {
          console.log(result.text);
          setSend(true)
          setForm({name: '',
      subject: '',
      email: '',
      message: ''})
      }, (error) => {
          console.log(error.text);
      });
      
}

    return ( 
        <div className='c'>
            <div className='c-l'>
               <div className='c-c-t'>
               <h2>Get in Touch.</h2>
               <p>Kindly forward all your enquiries to me</p>
               <div className="icons">
                    <FaLinkedin/>
                    <FaTwitter style={{marginLeft: '10px'}}/>
                </div>
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
                <form ref={formRef} onSubmit={sumbit}>
                    <p>Need A Service?</p>
                    <h2>Send A Message</h2>
                    <input type='text' placeholder='Enter your Name' name="user_name" 
                        value={form.name}
                        onChange={(e)=>{
                            setForm({name: e.target.value})
                        }}
                    />
                    <input type='text' placeholder='Enter your Subject' name="user_subject"
                        value={form.subject}
                        onChange={(e)=>{
                            setForm({subject: e.target.value})
                        }}
                    />
                    <input type='email' placeholder='Enter your Email' name="user_email"
                        value={form.email}
                        onChange={(e)=>{
                            setForm({email: e.target.value})
                        }}
                    />
                    <textarea rows={10} name="message"
                        value={form.message}
                        onChange={(e)=>{
                            setForm({message: e.target.value})
                        }}
                    />
                    <div>
                    <button>Submit</button> {send? 'Thank You!' : null}
                    </div>
                    
                </form>
            </div>
        </div>
     );
}
 
export default Contact;