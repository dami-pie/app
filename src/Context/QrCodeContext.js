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
            setScanning(false);
            if(/^([0-9]{6})$/.test(result.text)){
                toast.success('Solicitação de abertura enviada com sucesso');
                await api.post('/', {time:new Date().toISOString(),key:result.text});
            } else{
                toast.error('O QR Code lido é inválido');
            }
        } else {
            toast.error('Erro ao ler QR Code');
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