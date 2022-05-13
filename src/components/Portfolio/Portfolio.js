import './Portfolio.css';
import { portfolio } from '../../Data';

// ref web https://restaurant-website-capstone-teeking0007.vercel.app/
// http://www.automatediscord.com/
// https://www.buzymart.com/
// https://weather-app-teeking0007.vercel.app/
//https://www.reimaginedclub.com/


const Portfolio = () => {
    
    return ( 
        <div className="p">
          <h1>Milestones of Projects</h1>
          <p>Here are some of the projects I have worked on</p>
          <div className='pp-con'>

            {portfolio.map((item, index)=>{
              return (
              <div className="pp-c" key={index} >
                <div className='top'>
                  <div className='inner'></div>
                  <div className='inner'></div>
                  <div className='inner'></div>
                </div>
                <a href={item.link} target='_blank' rel='noreferrer' >
                  <img src={item.img} alt='portfolio-pic' className='p-img' />
                </a>
              </div>
              )
            })}



            
            
            
          
          
          
          
          
          </div>
          
          


        </div>
     );
}
 
export default Portfolio;