import { Link } from "react-router-dom";


const ShowCard = ({ card }) => {
    const { image, name, price, description } = card || {};
    return (
        <div>
            <div className="card lg:card-side bg-rose-200 w-[80%] mx-auto my-8 shadow-xl">
                <figure className="w-full lg:w-[60%]"><img className="w-full h-full" src={image} alt="Album" /></figure>
                <div className="card-body w-full lg:w-[40%]">
                    <h2 className="card-title text-2xl lg:text-4xl font-bold">{name}</h2>
                    <p className=" text-base lg:text-xl text-slate-600">{description}</p>
                    <p className=" text-base lg:text-lg font-bold">Price : {price}</p>
                    <Link to='/'>
                        <div className="card-actions ">
                            <button className="btn w-full bg-orange-500 text-slate-700 font-bold border-none">Go back to home</button>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ShowCard;