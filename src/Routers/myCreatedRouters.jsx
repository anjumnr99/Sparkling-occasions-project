import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Gallery from "../Pages/Gallery/Gallery";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const myCreatedRouters = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
               path:'/',
               element:<Home></Home>,
               loader: ()=> fetch('/data.json')
            },
            {
               path:'/about',
               element:<PrivateRoute>
                  <About></About>
               </PrivateRoute>
            },
            {
               path:'/gallery',
               element:<PrivateRoute>
                  <Gallery></Gallery>
               </PrivateRoute>
            },
            {
               path:'/login',
               element:<Login></Login>
            },
            {
               path:'/register',
               element:<Register></Register>
            },
            {
               path:'/services/:id',
               element:<PrivateRoute>
                  <ServiceDetails></ServiceDetails>
               </PrivateRoute>,
               loader: ()=> fetch('/data.json')
            }
        ]
    }
])
export default myCreatedRouters;