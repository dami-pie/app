import React from 'react';
import logo from '../../images/logo_branco.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle} from '@fortawesome/free-brands-svg-icons';
import curves from '../../images/curves.svg'
import styles from './styles.module.scss';

export default function Login() {
  return (
    <>
        <div className={styles.header}>
          <div className={styles.topLogo}>
            <img src={logo} className/>
          </div>
          <img src={curves} className={styles.curves}/>
        </div>
        <div className={styles.body}>
          <button>
            <FontAwesomeIcon icon={faGoogle} className={styles.googleLogo} size="xl" inverse />
            <span className={styles.buttonText}>Login com o Google</span>
          </button>
        </div>
        <div className={styles.footer}>
          <a>
            Caso tenha algum problema, <br/>
            <span>entre em contato</span>
          </a>
        </div>
    </>
  );
}

