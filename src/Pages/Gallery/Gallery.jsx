import Footer from "../../Components/Footer";



const Gallery = () => {
    return (
        <div>
            <div className="max-w-[1440px] mx-auto px-5 my-20 lg:px-20">
                <div className=" text-center mb-7">
                    <div  >
                        <h1 className="text-5xl font-semibold mb-3 ">Gallery</h1>
                    </div>

                    <p className=" text-xs font-extrabold text-rose-400">OUR RECENT PROJECT</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    <img className="h-80" src="https://i.ibb.co/1q3bLp9/img1.jpg" alt="" />
                    <img className="h-80" src="https://i.ibb.co/rdrcRHK/img2.jpg" alt="" />
                    <img className="h-80" src="https://i.ibb.co/1YV9gDD/img3.jpg" alt="" />
                    <img className="h-80" src="https://i.ibb.co/xLgBfgY/gallery-5.jpg" alt="" />
                    <img className="h-80" src="https://i.ibb.co/s5SyRLK/gallery04.jpg" alt="" />
                    <img className="h-80" src="https://i.ibb.co/B2dg7js/gallery-3.jpg" alt="" />
                    <img className="h-80" src="https://i.ibb.co/4ZCSwZz/img4.jpg" alt="" />
                    <img className="h-80" src="https://i.ibb.co/r5SR1Kr/img5.jpg" alt="" />
                    <img className="h-80" src="https://i.ibb.co/DwJ42yS/img6.jpg" alt="" />
                    <img className="h-80" src="https://i.ibb.co/pJ0gzR7/img7.jpg" alt="" />
                    <img className="h-80" src="https://i.ibb.co/YQ7B6ws/ima8.jpg" alt="" />
                    <img className="h-80" src="https://i.ibb.co/d7c69Pz/img9.jpg" alt="" />
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Gallery;