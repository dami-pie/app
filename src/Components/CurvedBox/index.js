import React from "react";
import styles from './styles.module.scss';


export default function CurvedBox(props){

    return(
        <div className={styles.outerBox}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}