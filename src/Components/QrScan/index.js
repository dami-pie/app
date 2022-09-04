import React, { useContext, useEffect, useState } from "react";
import { QrCodeContext } from "../../Context/QrCodeContext";
import QrReader  from "react-qr-scanner";
import styles from "./styles.module.scss";

export default function QrScan(){
	const {handleError, handleScan, setScanning} = useContext(QrCodeContext);
	const [width, setWidth] = useState(window.innerWidth);
	
	useEffect(()=>{
		setWidth(window.innerWidth);
	},[]);

	const isDesktop = (width > 768);

    const previewStyle = {
		height: 200,
		width: 300,
	}

	return (
		<div className={styles.container}>
			<div className={styles.descriptionBox}>
				<h2>ABRIR PORTA</h2>
				<h3>ESCANEIE O CÓDIGO QR PARA CONTINUAR</h3>
			</div>
			<div className={styles.readerBox}>
				<QrReader
					delay={500}
					style={previewStyle}
					onError={handleError}
					onScan={handleScan}
					legacyMode={true}
					facingMode={`environment`} 
					constraints={
						isDesktop
						  ? undefined
						  : {
							  video: {
								facingMode: { exact: `environment` }
							  }
							}
					  }
				/>
				<div className={styles.buttons}>
					<button onClick={() => {setScanning(false)}}>Fechar scanner</button>
				</div>
			</div>			
		</div>
	);

}