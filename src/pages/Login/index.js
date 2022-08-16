import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';
import logo from '../../images/logo_branco.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle} from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom'
import CurvedBox from "../../Components/CurvedBox";
import ContactFooter from '../../Components/ContactFooter';
import LoginButton from '../../Components/LoginButton';

const client_id = "662762925143-vs71ih7qtl2oj3h6ln27c685rakv93bj.apps.googleusercontent.com";


export default function Login() {

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: client_id,
        scope: ""
      })
    }

    gapi.load('client:auth2',start);
  });

  let navigate = useNavigate();

  return (
    <>
        <CurvedBox>
          <div className={styles.topLogo}>
            <img src={logo} alt='ecomp logo'/>
          </div>
        </CurvedBox>
        <div className={styles.body}>
          <button>
            <FontAwesomeIcon icon={faGoogle} className={styles.googleLogo} size="xl" inverse />
            <span className={styles.buttonText} onClick={()=>{navigate('/home')}}>Login com o Google</span>
            <LoginButton/>
          </button>
        </div>
        <ContactFooter/>
    </>
  );
}

