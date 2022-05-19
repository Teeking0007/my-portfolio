import './Work.css';
import fiverr from '../../assests/fiverr.png';
import woo from '../../assests/woo.png';
import shopping from '../../assests/shopping.png';
import upwork from '../../assests/upwork.png';
import wordpress from '../../assests/wordpress.png';



const Works = () => {
    return ( 
        <div className='w'>
            <div className='w-l'>
                <h2>Works for All these <br/>
                <span>Brands & Clients</span>
                </h2>
                <p>I have worked and still working with many of these brands and freelancing website, delivering a top notch project with good feedbacks and review </p>
                
                <div>
                <button>Hire Me</button>
                </div>
            </div>

            <div className='w-r'>
                <div className='w-c'>
                    <div className='w-i'>
                        <img src={upwork} alt='upwork' style={{transform: 'scale(0.9)'}} />
                    </div>
                    <div className='w-i'>
                        <img src={fiverr} alt='fiverr' style={{transform: 'scale(0.15)'}}/>
                    </div>
                    <div className='w-i'>
                        <img src={woo} alt='woo' style={{transform: 'scale(0.7)'}}/>
                    </div><div className='w-i'>
                        <img src={wordpress} alt='fiverr' style={{transform: 'scale(0.15)'}}/>
                    </div>
                </div>
                <div className='w-s'>
                    <img src={shopping} alt='shopping' style={{transform: 'scale(0.15)'}}/>
                    </div>
            </div>

        </div>
     );
}
 
export default Works;