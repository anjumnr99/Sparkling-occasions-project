import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ServiceCard from './ServiceCard';

const Services = ({services}) => {

    console.log(services);
    useEffect(()=>{
        AOS.init({duration:2000});

    },[]);

    return (
        <div data-aos="fade-up" className=" max-w-[1440px] mx-auto   px-3 py-2 lg:px-10 lg:py-6 " >
            <div className="my-10">

            </div>
            <div className=" text-center mb-7">
                <div data-aos="fade-down" >
                    <h1 className="text-5xl font-semibold mb-3 ">Services</h1>
                </div>
                
                <p className=" text-xs font-extrabold text-rose-400">HERE IS HOW WE CAN HELP YOU</p>
            </div>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service=><ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;