import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';


export default function PrivateRoutes(){
    const { authenticated } = useContext(AuthContext);
    
    return authenticated ? <Outlet/> : <Navigate to="/"/>

}

