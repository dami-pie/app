import React, { createContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const AuthContext = createContext();


function AuthContextProvider({ children }){

    let navigate = useNavigate();


    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        
        if(token){
            api.defaults.headers.Authorization = `Bearer ${token}`;
            return true;
        }

        return false;
    }

    const [authenticated, setAuthenticated] = useState(isAuthenticated);

    async function handleLogin(oAuthObj){
        if(oAuthObj){
            const { data } = await api.post('/authenticate', {email:oAuthObj.email});
            if(data.token){ // if data.token, mockado por equanto
                setAuthenticated(true);
                localStorage.setItem('token', data.token);
                localStorage.setItem('username',oAuthObj.given_name);
                api.defaults.headers.Authorization = `Bearer ${data.token}`;
                navigate('/home');
            }
        } 
    }

    function handleLogout(){
        setAuthenticated(false);
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        api.defaults.headers.Authorization = undefined;
        navigate('/');
    }


    return(
        <AuthContext.Provider value={{authenticated,handleLogin,handleLogout}}>
            {children}
        </AuthContext.Provider>
    )

}

export {AuthContext, AuthContextProvider};