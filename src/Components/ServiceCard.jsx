
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ServiceCard = ({ service }) => {
    const { id, image, name, price, description, button } = service || {};
   

    useEffect(()=>{
        AOS.init({duration:1000});

    },[]);

    return (
        <div>
            <div data-aos="zoom-in" className="card h-96 bg-base-100 shadow-xl flex flex-col my-auto">
                <figure className=' h-[60%]'><img className='h-full w-full' src={image} alt="Shoes" /></figure>
                <div className=" h-[40%] pl-4 pt-4 pr-2 ">
                    <div className='h-full'>
                        <h2 className="text-lg font-medium">{name}</h2>
                        <p>{description.length > 50 ? <div>
                            {description.slice(0, 50)}......
                        </div>
                            : { description }
                        }</p>

                        <div className="flex justify-between items-center my-2 ">
                            <p className=' text-yellow-600 text-base lg:text-lg font-bold'>{price}</p>
                            <button className="btn bg-rose-500 text-white">{button}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;