import React from "react";
import CurvedBox from "../../Components/CurvedBox";
import styles from './styles.module.scss'
import logo from '../../images/logo_e_branco.png';
import { faArrowLeft  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom'

export default function Contact(){
    let navigate = useNavigate();

    return(
        <>
          <CurvedBox>
            <div className={styles.topLogo}>
            <FontAwesomeIcon 
              icon={faArrowLeft} 
              className={styles.logout} 
              size="xl" 
              inverse
              onClick={()=>{navigate('/')}}
            />
            <img src={logo} alt='ecomp logo'/>
            </div>
          <div className={styles.topContent}>
            <h1>FALE <br/>
                <span>CONOSCO</span>
            </h1>
          </div>
          </CurvedBox>
          <div className={styles.contentBody}>

          </div>
        </>
    )
}