import React, { useContext } from 'react';
import { Authcontext } from '../../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = ({children}) => {
    const { user, loading } = useContext(Authcontext);
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace> </Navigate>
};

export default Privateroute;