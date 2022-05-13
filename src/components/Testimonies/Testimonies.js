import './Testimonies.css';
import erik from '../../assests/erik.jpg';
import jil from '../../assests/jil.jpg';
import kate from '../../assests/kate.jpg';
import manager from '../../assests/manager.png';


const Testimonies = () => {
    return ( 
        <div className='t'>
            <div className='t-l'>
               <p> Testimonies &
                    Recommendations </p>
            </div>
            <div className='t-r'>
                <div className='tt-c'>
                    <div className='tt-img'>
                        <img src={jil} alt='jil' />
                    </div>
                    <h4>Jil</h4>
                    <p>I enjoy his sevices, thanks to him I am enjoy to get my store online</p>
                </div>
                <div className='tt-c'>
                    <div className='tt-img'>
                        <img src={erik} alt='erik' />
                    </div>
                    <h4>Erik Bjontegard</h4>
                    <p>He is supportive and a nice man, I will love to work with him again</p>
                </div>
                <div className='tt-c'>
                    <div className='tt-img'>
                        <img src={manager} alt='manager' />
                    </div>
                    <h4>Raul Investor</h4>
                    <p>He is a great man to work with, He supposed me throughout the project. I will will surely be glad to work with him again. Thanks</p>
                </div>
                <div className='tt-c'>
                    <div className='tt-img'>
                        <img src={kate} alt='kate' />
                    </div>
                    <h4>Kate</h4>
                    <p>He help me manage my game development from scratch and deliver a good project and he is continue to shows his support for the project</p>
                </div>
                
                
            </div>
        </div>
     );
}
 
export default Testimonies;