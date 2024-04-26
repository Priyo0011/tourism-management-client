import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user} = useAuth();
    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/'} />
    }
    return (
        <div className="max-w-7xl mx-auto">
            {children}
        </div>
    );
};

export default PrivateRoute;