import React, { createContext, useState} from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';

const QrCodeContext = createContext();


function QrCodeContextProvider({ children }){

    const [facingMode, setFacingMode] = useState('rear');
    const [scanning, setScanning] = useState(false);
    const [type, setType] = useState(''); //Serão usadas futuramente para definir
                                         // se está abrindo a porta ou cadastrando cartao
    const handleError = (err) => {
        console.log(err);
    }

    const handleScan =  async (result) => {
        if(result && result.text){
            if(/^([0-9]{6})$/.test(result.text)){
                toast.success('Solicitação de abertura enviada com sucesso');
                await api.post('/', {time:"2018-09-22T12:42:31Z",key:result.text});
                setScanning(false);
            } else{
                toast.error('O QR Code lido é inválido');
                setScanning(false);
            }
            
        }
    }

    const switchFacingMode = () => {
        facingMode === 'rear' ? setFacingMode('front') : setFacingMode('rear');
    }

    return(
        <QrCodeContext.Provider value={{handleError, handleScan, setScanning, switchFacingMode, setType, scanning, facingMode,type}}>
            {children}
        </QrCodeContext.Provider>
    )

}

export { QrCodeContext, QrCodeContextProvider };