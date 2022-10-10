import './Services.css'
import { serviceData } from '../../Data';

const Services = () => {
    return ( 
        <div className="s" id='services'>
            <h1>Services I Render</h1>
            <p>These are the services that you will get from me with 99.9% satisfactory</p>
            <div className="s-container">
                {
                    serviceData.map(data=>{
                       return <div className="s-card" key={data.id}>
                            <img src={data.icon} alt='pp' />
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                    })
                }
                
            </div>
        </div>
     );
}
 
export default Services;