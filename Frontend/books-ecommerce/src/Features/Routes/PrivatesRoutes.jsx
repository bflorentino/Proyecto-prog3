import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {AuthContext} from '../Context/AuthContext';

const PrivateRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext);
    let access;

    try{
        access = user.data.idRol;
    }catch{
        access = null;
    }
    
    return access === 1 ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;