import { Children, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
      const token = localStorage.getItem('token'); 
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(user) {
        return children;
    }
    return (
        <Navigate to="/login" state={{from:location}} replace></Navigate>
    );
};

export default PrivateRoutes;