import React, {useEffect, useState, useContext} from 'react';
import {AuthContext} from '../../Context/AuthContext'
import { QrCodeContext } from '../../Context/QrCodeContext';
import logo from '../../images/logo_e_branco.png';
import styles from './styles.module.scss';
import CurvedBox from "../../Components/CurvedBox";
import { faSignOutAlt  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import QrScan from '../../Components/QrScan';


export default function Home() {
    const [username, setUsername] = useState("");
    const { handleLogout } = useContext(AuthContext);
    const {scanning, setScanning} = useContext(QrCodeContext);

    
    useEffect(() => {
      const userData = localStorage.getItem('username');
      setUsername(userData.toUpperCase());
    },[])

  return (
    <>
        <CurvedBox>
          <div className={styles.topLogo}>
            <FontAwesomeIcon 
              icon={faSignOutAlt} 
              className={styles.logout} 
              size="xl" 
              inverse
              onClick={()=>{handleLogout()}}
            />
            <img src={logo} alt='ecomp logo'/>
          </div>
          <div className={styles.topContent}>
            <h1>BEM VINDO, <br/>
                <span>{username ? username : ""}</span>
            </h1>
          </div>
        </CurvedBox>
        <div className={styles.body}>
          {
            scanning ? <QrScan/> :
            <div className={styles.contentBody}>
              <button onClick={()=>{setScanning(true)}}>ABRIR PORTA</button>
              <button>CADASTRAR CARTÃO</button>
            </div>
          }
        </div>
    </>
  );
}
