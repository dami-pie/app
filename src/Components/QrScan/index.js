import React, {useState} from "react";
import QrReader  from "react-qr-scanner";
import styles from "./styles.module.scss";
import api from "../../services/api";

export default function QrScan(){
    //const [result, setResult] = useState("");

    const handleError = (err) => {
        console.log(err);
    }

    const handleScan =  async (result) => {
        if(result && result.text){
            await api.post('/', {time:"2018-09-22T12:42:31Z",key:result.text});
        }
    }

    const previewStyle = {
		height: 200,
		width: 300,
	}

	return (
		<div className={styles.container}>
			<QrReader
			delay={500}
			style={previewStyle}
			onError={handleError}
			onScan={handleScan}
			legacyMode={true}
			facingMode={'rear'}
			/>
		</div>
	);

}
