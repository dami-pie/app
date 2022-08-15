import React, {useEffect, useState, useRef} from 'react';
import logo from '../../images/logo_e_branco.png';
import curves from '../../images/curves.svg'
import styles from './styles.module.scss';
import { faSignOutAlt  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom'


export default function Home() {
    const [timer, setTimer] = useState(0);
    const [otp, setOtp] = useState('');
    const intervalId = useRef(null);
    let navigate = useNavigate();

    const generateOtp = () =>{
        let str = '';

        for(let i =0; i<5; i++){
            str += Math.abs(Math.floor(Math.random() * (0 - 9)));
        }

        setOtp(str);
    }

    useEffect(() => {
        intervalId.current = setInterval(() => {
                setTimer((prevState) => prevState - 1);
            }, 1000);
           
            return () => clearInterval(intervalId.current);
    });

    useEffect(() => {
        if(timer <=0){
            generateOtp();
            clearInterval(intervalId.current);
            setTimer(60);
            
        }
    },[timer]);


  return (
    <>
        <div className={styles.header}>
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
                <span>ANDRÉ</span>
            </h1>
          </div>
          <img src={curves} alt='curved svg' className={styles.curves}/>
        </div>
        <div className={styles.body}>
            <div className={styles.topBody}>
                <h1>
                    <span>
                        ONE <br/>
                        TIME <br/>
                    </span>
                    PASSWORD
                </h1>
            </div>
            <div className={styles.contentBody}>
                <div className={styles.otpBox}>
                    <h1>{otp}</h1>  
                    <span>{timer}</span> 
                </div>
            </div>
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
