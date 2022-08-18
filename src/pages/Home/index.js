import React, {useEffect, useState, useRef} from 'react';
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
    let navigate = useNavigate();
    
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        setUsername(userData.given_name.toUpperCase());
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
              onClick={()=>{navigate('/')}}
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
                <div className={styles.otpBox}>
                    <QrScan/>
                </div>
            </div>
        </div>
        <ContactFooter/>
    </>
  );
}
