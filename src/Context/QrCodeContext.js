import React, { createContext, useState} from 'react';
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
            console.log('Qr-Code escaneado, ',result)
            await api.post('/', {time:"2018-09-22T12:42:31Z",key:result.text});
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