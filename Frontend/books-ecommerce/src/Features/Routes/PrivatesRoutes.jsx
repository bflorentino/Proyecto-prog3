import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {AuthContext} from '../Context/AuthContext';

const PrivateRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext);
    
    return user ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;