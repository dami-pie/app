import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import logo from '../../images/logo_branco.png';
import jwtDecode from 'jwt-decode';
import styles from './styles.module.scss';
import { useReactPWAInstall } from "react-pwa-install";
import { faArrowDown  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import installLogo from '../../images/install_icon.png'

export default function Login() {
  const { pwaInstall, supported, isInstalled } = useReactPWAInstall();
  const {handleLogin}  = useContext(AuthContext);

  const handleCallbackResponse = (res) => {
    var userObject = jwtDecode(res.credential);
    handleLogin(userObject);
  }

  const handleClick = () => {
    pwaInstall({
      title: "Instalar Ecomp - App",
      icon:installLogo,
      description: "Este é o aplicativo dos alunos de Engenharia da Computação da UPE. Atualmente está sendo utilizado para gestão de acessos aos ambientes destinados aos discentes e doscentes.",
    })
      .then(() =>toast.success('Aplicativo instalado com sucesso'))
      .catch(() => toast.error("Usuário cancelou a instalação"));
  };


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
        width:250
      }
    )
  });

  return (
    <>
        <div className={styles.curves}>
            <img src={logo} alt='ecomp logo'/>
            <div id="googleButton"></div>
        </div>
        <div className={styles.help}>
          {supported() && !isInstalled() && (
          <button type="button" onClick={handleClick}>
          <FontAwesomeIcon 
              icon={faArrowDown} 
              className={styles.logout} 
              size="xl" 
              inverse
            />
          </button>
          )}
        </div>
    </>
  );
}

