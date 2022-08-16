import React from "react";
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

export default function ContactFooter(){
    const navigate=useNavigate();

    return (
        <div className={styles.footer}>
          <p onClick={()=>{navigate('/contact')}}>
            Caso tenha algum problema, <br/>
            <span>entre em contato</span>
          </p>
        </div>
    )
}