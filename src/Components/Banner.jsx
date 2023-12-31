import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);


    return (
        <div>
            <div className="hero min-h-[80vh] " style={{ backgroundImage: 'url(https://i.ibb.co/4tVtQ7m/Banner-Image.jpg)' }}>

                <div className=" hero-overlay bg-opacity-60 "></div>

                <div className=" ">

                    <div className=" max-w-xl text-left my-4">
                        <div data-aos="fade-left" className='ml-4'>
                            <p className="mb-5 text-2xl md:text-3xl lg:text-4xl text-white font-extrabold italic">Let's have a party!</p>
                        </div>
                        <div data-aos="fade-right" className='ml-4'>
                            <h1 className="mb-5 text-yellow-600 text-4xl md:text-5xl lg:text-8xl font-extrabold">We plan the best events.</h1>

                        </div>
                        <div data-aos="fade-left" className='text-rose-500 ml-4 font-bold'>
                            <p>Planing a wedding proposal or event in our busy city is not so easy also it take skill and time to make it all look easy-going</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;