import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";



const MainLayout = () => {
    return (
        <div className=" bg-gray-100 border">
           <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;