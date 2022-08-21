import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import { Context } from '../Context/Context';


export default function PrivateRoutes(){
    const { authenticated } = useContext(Context);
    
    return authenticated ? <Outlet/> : <Navigate to="/"/>

}

