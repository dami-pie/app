import React, {useEffect, useState, useContext} from 'react';
import {Context} from '../../Context/Context'
import logo from '../../images/logo_e_branco.png';
import styles from './styles.module.scss';
import CurvedBox from "../../Components/CurvedBox";
import ContactFooter from '../../Components/ContactFooter';
import { faSignOutAlt  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom'
import QrScan from '../../Components/QrScan';


export default function Home() {
    const [username, setUsername] = useState("");
    const { handleLogout } = useContext(Context);
    let navigate = useNavigate();
    
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
            <div className={styles.topBody}>
                <h1>
                    <span>
                        QR <br/>
                        CODE <br/>
                    </span>
                    SCANNER
                </h1>
            </div>
            <div className={styles.contentBody}>
              <QrScan/>
            </div>
        </div>
        <ContactFooter/>
    </>
  );
}
