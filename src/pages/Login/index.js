import React from 'react';
import logo from '../../images/logo_branco.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle} from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom'
import CurvedBox from "../../Components/CurvedBox";
import ContactFooter from '../../Components/ContactFooter';

export default function Login() {
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
          </button>
        </div>
        <ContactFooter/>
    </>
  );
}

