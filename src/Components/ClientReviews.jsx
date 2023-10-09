import { useEffect, useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ClientsCard from "./ClientsCard";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ClientReviews = () => {

    const handleDragStart = (e) => e.preventDefault();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))

            AOS.init({ duration: 2000 });
    }, []);


    // const responsive = {
    //     0: { item: 1 },
    //     600: { item: 2 },
    //     1024: { item: 3 }
    // }

    return (
        <div className="max-w-[1440px] mx-auto mb-20  px-3 py-2 lg:px-10 lg:py-6 ">
            <div className="text-center">
                <div data-aos="fade-down">
                    <h1 className=" text-5xl font-semibold mb-3 ">Testimonials</h1>
                </div>
                <p className=" text-xs font-extrabold text-rose-400">HAPPY CLIENTS ABOUT US</p>
            </div>

            <div  className=" max-w-xl h-96  mx-auto my-10 ">
                <AliceCarousel
                    items={reviews?.map(review => <ClientsCard key={review.id}
                        review={review}></ClientsCard>)}
                    autoPlay={true}
                    autoPlayInterval="2000"
                    // responsive={responsive}
                    dotsDisabled={false}
                    buttonsDisabled={true}
                    onDragStart={handleDragStart} 
                    role="presentation"
                    
                    
                >

                </AliceCarousel>

            </div>

            {/* <AliceCarousel mouseTracking items={  
                reviews.map(review => <ClientsCard 
                onDragStart={handleDragStart} 
                role="presentation" 
                key={review.id} 
                review={review}>

                </ClientsCard>) } /> */}




        </div>
    );
};

export default ClientReviews;