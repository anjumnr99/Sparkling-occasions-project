import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowCard from "./ShowCard";
import Error from "../Error/Error";

const ServiceDetails = () => {
    const services = useLoaderData();
    const [card, setCard] = useState([]);

    const { id } = useParams();
    console.log(services, id);

    useEffect(() => {
        const findCard = services?.find(card => card.id === parseInt(id))
        if (findCard) {
            setCard(findCard)
        }

    }, [id, services]);

    console.log(card);
    return (
        <div>
            <ShowCard card={card}></ShowCard>

        </div>
    );
};

export default ServiceDetails;