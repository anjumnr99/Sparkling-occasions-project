import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Gallery from "../Pages/Gallery/Gallery";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


const myCreatedRouters = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
               path:'/',
               element:<Home></Home>
            },
            {
               path:'/about',
               element:<About></About>
            },
            {
               path:'/gallery',
               element:<Gallery></Gallery>
            },
            {
               path:'/login',
               element:<Login></Login>
            },
            {
               path:'/register',
               element:<Register></Register>
            }
        ]
    }
])
export default myCreatedRouters;