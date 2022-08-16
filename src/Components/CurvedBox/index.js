import React from "react";
import styles from './styles.module.scss';


export default function CurvedBox(props){

    return(
        <div className={styles.outerBox}>
            <div className={styles.content}>
                {props.children}
            </div>
            <div className={styles.curves}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path d="M0,160L80,133.3C160,107,320,53,480,74.7C640,96,800,192,960,197.3C1120,203,1280,117,1360,74.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
            </div>
        </div>
    )
}