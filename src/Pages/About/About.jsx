import { PiBuildings } from 'react-icons/pi';
import { PiChatsBold } from 'react-icons/pi';
import { TfiWrite } from 'react-icons/tfi';
import { GiPartyPopper } from 'react-icons/gi';
import Footer from '../../Components/Footer';


const About = () => {
    return (
        <div className='bg-white'>
            <div>
                <div className='max-w-[1440px] mx-auto  my-10  px-3 py-2 lg:px-8 lg:py-3 '>
                    <div className='mt-10'>
                        <h1 className=' text-2xl lg:text-5xl font-semibold text-slate-800 text-center'><span className='text-orange-500 '>Hello!</span> We Are an Event Planning Agency</h1>
                        <p className=' text-base lg:text-md w-full lg:w-[50%] mx-auto font-semibold mt-10 mb-20 text-center text-slate-600'>As the premier event planning company in New York City, we know that it’s not “one size fits all”. Each event and client is unique and we believe our services should be as well. We know that it should be “Can I hire a planner?” not “Can I afford one?”.</p>
                    </div>
                    <div className='grid lg:grid-cols-7 mb-20 md:grid-cols-3 grid-cols-1 gap-5'>

                        <div className=' flex flex-col  items-center justify-center space-y-4'>
                            <PiBuildings className='text-6xl text-center text-rose-500'></PiBuildings>
                            <p className=' text-xl text-center'>Find the perfect <br /> venue for free</p>

                            <p className=' w-10 h-10 p-2 text-center rounded-full bg-orange-500 text-white text-xl' >1</p>

                        </div>
                        <hr className=' w-44 md:mt-44 lg:mt-44 mx-auto' />
                        <div className=' flex flex-col items-center justify-center space-y-4'>
                            <PiChatsBold className='text-6xl text-center text-rose-500'></PiChatsBold>
                            <p className=' text-xl text-center'>Connect with the<br /> best vendor</p>
                            <p className=' w-10 h-10 p-2 text-center rounded-full bg-orange-500 text-white text-xl' >2</p>
                        </div>
                        <hr className=' md:hidden lg:block w-44 mt-10 lg:mt-44' />
                        <div className=' flex flex-col items-center justify-center space-y-4'>
                            <TfiWrite className='text-6xl  text-rose-500'></TfiWrite>
                            <p className=' text-xl text-center'>Let us help you <br /> with the event</p>
                            <p className=' w-10 h-10 p-2 text-center rounded-full bg-orange-500 text-white text-xl' >3</p>
                        </div>
                        <hr className=' w-44 mt-10 md:mt-44 lg:mt-44' />
                        <div className=' flex flex-col items-center justify-center space-y-4'>
                            <GiPartyPopper className='text-6xl text-center text-rose-500'></GiPartyPopper>
                            <p className=' text-xl'>Enjoy the party <br /> with your friends</p>
                            <p className=' w-10 h-10 p-2 text-center rounded-full bg-orange-500 text-white text-xl' >4</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className='bg-gradient-to-r from-rose-400 to-orange-400 mt-20'>
                
                <div className='max-w-[1440px] mx-auto  my-10  px-3 py-2 lg:px-8 lg:py-20 '>
                <h1 className='text-3xl lg:text-5xl font-semibold text-slate-800 text-center my-10'>Meet Our Best Team Members</h1>
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10'>



                        <div className=' flex flex-col items-center'>
                            <div className="avatar">
                                <div className="w-56 rounded-full ring ring-base-300 ring-offset-base-200 ring-offset-4">
                                    <img src="https://i.ibb.co/YQjMSbs/teaam4.jpg" />
                                </div>

                            </div>
                            <div className='text-center my-5'>
                                <p className='text-2xl text-base-200 font-semibold'>Alice Bohn </p>
                                <p className=' text-slate-600 font-bold'>Manager</p>
                            </div>
                        </div>
                        <div className=' flex flex-col items-center'>
                            <div className="avatar">
                                <div className="w-56 rounded-full ring ring-base-300 ring-offset-base-200 ring-offset-4">
                                    <img src="https://i.ibb.co/sgdVpB6/team-2.jpg" />
                                </div>

                            </div>
                            <div className='text-center my-5'>
                                <p className='text-2xl text-base-200 font-semibold'>Turner Alia</p>
                                <p className=' text-slate-600 font-bold'>Agency Founder</p>
                            </div>
                        </div>
                        <div className=' flex flex-col items-center'>
                            <div className="avatar">
                                <div className="w-56 rounded-full ring ring-base-300 ring-offset-base-200 ring-offset-4">
                                    <img src="https://i.ibb.co/cwFW2RD/team1.jpg" />
                                </div>

                            </div>
                            <div className='text-center my-5'>
                                <p className='text-2xl text-base-200 font-semibold'>Amy Adams </p>
                                <p className=' text-slate-600 font-bold'>Сoordinator</p>
                            </div>
                        </div>
                        <div className=' flex flex-col items-center'>
                            <div className="avatar">
                                <div className="w-56 rounded-full ring ring-base-300 ring-offset-base-200 ring-offset-4">
                                    <img src="https://i.ibb.co/StxmyHp/team3.jpg" />
                                </div>

                            </div>
                            <div className='text-center my-5'>
                                <p className='text-2xl text-base-200 font-semibold'>Julia Jamson </p>
                                <p className=' text-slate-600 font-bold'>Creative Director</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;