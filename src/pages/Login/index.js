import React, { useEffect } from 'react';
import logo from '../../images/logo_branco.png';
import jwtDecode from 'jwt-decode';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom'
import CurvedBox from "../../Components/CurvedBox";
import ContactFooter from '../../Components/ContactFooter';

export default function Login() {

  let navigate = useNavigate();

  const handleCallbackResponse = (res) => {
    console.log("O google responde com um JWT encryptado")
    console.log("Encoded JWT ", res.credential)
    console.log("Podemos desencriptar para obter as informações do usuario")
    var userObject = jwtDecode(res.credential);
    console.log(userObject);
    localStorage.setItem("user",JSON.stringify(userObject));
    navigate('/home');
  }
  
  useEffect(() => {   
    /* global google */
    google.accounts.id.initialize({
      client_id:"662762925143-vs71ih7qtl2oj3h6ln27c685rakv93bj.apps.googleusercontent.com",
      auto_select:false,
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById('googleButton'), {
        type:"standard",
        theme: "outline",
        size:"large",
        text:"signin_with	",
        shape:"pill",
        logo_alignment: "left",
        locale:"pt_BR",
        width:300
      }
    )
  },[]);

  return (
    <>
        <CurvedBox>
          <div className={styles.topLogo}>
            <img src={logo} alt='ecomp logo'/>
          </div>
        </CurvedBox>
        <div className={styles.body}>
          <button>
            <div id="googleButton"></div>
          </button>
        </div>
        <ContactFooter/>
    </>
  );
}

