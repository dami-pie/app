import React from 'react';
import logo from '../../images/logo_branco.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle} from '@fortawesome/free-brands-svg-icons';
import curves from '../../images/curves.svg'
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom'

export default function Login() {
  let navigate = useNavigate();

  return (
    <>
        <div className={styles.header}>
          <div className={styles.topLogo}>
            <img src={logo} alt='ecomp logo'/>
          </div>
          <img src={curves} alt='curved svg' className={styles.curves}/>
        </div>
        <div className={styles.body}>
          <button>
            <FontAwesomeIcon icon={faGoogle} className={styles.googleLogo} size="xl" inverse />
            <span className={styles.buttonText} onClick={()=>{navigate('/home')}}>Login com o Google</span>
          </button>
        </div>
        <div className={styles.footer}>
          <p>
            Caso tenha algum problema, <br/>
            <span>entre em contato</span>
          </p>
        </div>
    </>
  );
}

