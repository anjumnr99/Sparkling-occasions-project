import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner";
import Services from "../../Components/Services";
import ClientReviews from "../../Components/ClientReviews";


const Home = () => {
    const services = useLoaderData();

    return (
        <div className="">
            <Banner></Banner>
            <Services services={services}></Services>
            <ClientReviews></ClientReviews>
        </div>
    );
};

export default Home;