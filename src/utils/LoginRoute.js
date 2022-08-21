import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { Context } from '../Context/Context';


export default function LoginRoute(){
    const { authenticated } = useContext(Context);
    
    return authenticated ? <Navigate to="/home"/> : <Outlet/>

}

