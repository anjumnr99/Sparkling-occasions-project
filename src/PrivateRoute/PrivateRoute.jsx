import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="flex justify-center items-center h-[80vh] "><span className="loading loading-spinner  loading-lg"></span></div>
    }

    if (user) {
        return children;
    } else {
        return <Navigate to='/login'></Navigate>
    }
};

export default PrivateRoute;