import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner";
import Services from "../../Components/Services";


const Home = () => {
    const services = useLoaderData();
    
    return (
        <div className="block">
            <Banner></Banner>
            <Services services={services}></Services>
        </div>
    );
};

export default Home;