import React, {useState} from "react";
import QrReader from "react-qr-scanner";
import styles from "./styles.module.scss";

export default function QrScan(){
    const [result, setResult] = useState("");

    const handleError = (err) => {
        console.log(err);
    }

    const handleScan = (result) => {
        if(result){
            setResult(result);
            console.log(result);
        }
    }

    const previewStyle = {
		height: 240,
		width: 320,
	}

	return (
		<div className={styles.container}>
			<QrReader
			delay={500}
			style={previewStyle}
			onError={handleError}
			onResult={handleScan}
			/>
			<div className={styles.result}>{result}</div>		
		</div>
	);

}
