

const ClientsCard = ({ review }) => {
    const { id, client_pic, client_name, client_review } = review || {};
    return (
        <div>
            <div className="card w-full h-full  bg-base-100 rounded-lg py-10 px-10">
                <div className="">
                    <div className=" h-[60%] lg:w-[60%] mx-auto ">
                        <p className=" text-2xl font-semibold text-center mb-6">{`"${client_review}"`}</p>
                    </div>

                    <div className="flex justify-center h-[40%] items-center gap-4">

                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-rose-500 ring-offset-base-100 ring-offset-2">
                                <img src={client_pic} />
                            </div>

                        </div>
                        <p className=" text-lg font-semibold italic text-gray-500">{client_name}</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ClientsCard;