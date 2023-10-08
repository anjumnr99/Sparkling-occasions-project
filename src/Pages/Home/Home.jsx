import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner";
import Services from "../../Components/Services";
import ClientReviews from "../../Components/ClientReviews";
import Footer from "../../Components/Footer";
import ContactUs from "../../Components/ContactUs";


const Home = () => {
    const services = useLoaderData();

    return (
        <div className="">
            <Banner></Banner>
            <Services services={services}></Services>
            <ClientReviews></ClientReviews>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;