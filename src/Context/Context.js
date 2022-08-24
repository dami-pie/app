import React, { createContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Context = createContext();


function ContextProvider({ children }){

    let navigate = useNavigate();


    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        
        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            return true;
        }

        return false;
    }

    const [authenticated, setAuthenticated] = useState(isAuthenticated);

    async function handleLogin(oAuthObj){
        if(oAuthObj){
            const { data } = await api.post('/authenticate', {token:oAuthObj.email});
            console.log(data);
            if(oAuthObj){ // if data.token, mockado por equanto
                setAuthenticated(true);
                localStorage.setItem('token', 'mockado');
                localStorage.setItem('username',oAuthObj.given_name);
                //api.defaults.headers.Authorization = `Bearer ${data.token}`;
                navigate('/home');
            }
        } 
    }

    function handleLogout(){
        setAuthenticated(false);
        localStorage.removeItem('token');
        localStorage.setItem('username');
        //api.defaults.headers.Authorization = undefined;
        navigate('/');
    }


    return(
        <Context.Provider value={{authenticated,handleLogin,handleLogout}}>
            {children}
        </Context.Provider>
    )

}

export {Context, ContextProvider};