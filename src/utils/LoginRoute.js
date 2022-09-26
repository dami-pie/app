import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';


export default function LoginRoute(){
    const { authenticated } = useContext(AuthContext);
    
    return authenticated ? <Navigate to="/home"/> : <Outlet/>

}

