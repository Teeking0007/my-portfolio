import './Portfolio.css';
import { portfolio } from '../../Data';


const Portfolio = () => {
    
    return ( 
        <div className="p" id='projects'>
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