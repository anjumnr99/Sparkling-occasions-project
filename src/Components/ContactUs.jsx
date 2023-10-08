import { IoLocationOutline } from 'react-icons/io5';
import { BsClock, BsTelephone, BsPencilSquare } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const ContactUs = () => {

    useEffect(()=>{
        AOS.init({duration:1000});

    },[]);

    return (
        <div className=' max-w-[1440px] mx-auto px-10 lg:px-20 my-20 pt-10'>

            <div data-aos="fade-down" className='text-center mb-10'  >
                <h1 className="text-5xl font-semibold mb-3 ">Contact Us</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4'>
                <div  data-aos="zoom-in" className="card bg-base-100 shadow-xl  ">
                    <div className="card-body text-center flex flex-col space-y-2 justify-center items-center">
                        <IoLocationOutline className='text-4xl text-rose-500'></IoLocationOutline>
                        <h2 className="card-title">Postal Address</h2>
                        <p className="  text-gray-600 font-semibold">Unica Event Agency
                        </p>

                        <p className="  text-gray-600 font-semibold">
                            85 Fentiman Ave
                        </p>

                        <p className="  text-gray-600 font-semibold">
                            Ottawa, ON K1S 0T7</p>
                    </div>
                </div>
                <div  data-aos="zoom-in" className="card bg-base-100 shadow-xl  ">
                    <div className="card-body text-center flex flex-col space-y-2 justify-center items-center">
                        <BsClock className='text-4xl text-rose-500'></BsClock>
                        <h2 className="card-title">Phone & E-mail</h2>
                        <p className="  text-gray-600 font-semibold">Phone: <span className='text-yellow-500'>1-800-64-38</span>
                        </p>

                        <p className="  text-gray-600 font-semibold">
                            Fax: 1-800-64-39
                        </p>

                        <p className="  text-yellow-500 underline font-semibold">
                            office@fable.com</p>
                    </div>
                </div>
                <div  data-aos="zoom-in" className="card bg-base-100 shadow-xl  ">
                    <div className="card-body text-center flex flex-col space-y-1 justify-center items-center">
                        <BsTelephone className='text-4xl text-rose-500'></BsTelephone>
                        <h2 className="card-title">Open Hours</h2>
                        <p className="  text-gray-600 font-semibold">Monday – Friday
                        </p>

                        <p className="  text-gray-600 font-semibold">
                            8.00 am – 5.00 pm
                        </p>

                        <p className="  text-gray-600 font-semibold">
                            Weekend Closed</p>
                    </div>
                </div>
                <div  data-aos="zoom-in" className="card bg-base-100 shadow-xl  ">
                    <div className="card-body text-center flex flex-col space-y-2 justify-center items-center">
                        <BsPencilSquare className='text-4xl text-rose-500'></BsPencilSquare>
                        <h2 className="card-title">Sessions
                        </h2>
                        <p className="  text-gray-600 font-semibold">Mornings, 8 am – 12 noon
                        </p>

                        <p className="  text-gray-600 font-semibold">
                            Afternoons, 1 pm – 5 pm
                        </p>

                        <p className="  text-gray-600 font-semibold">
                            Full Day, 8 am – 5 pm</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;