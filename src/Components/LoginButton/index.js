import { GoogleLogin } from 'react-google-login';

const client_id = "662762925143-vs71ih7qtl2oj3h6ln27c685rakv93bj.apps.googleusercontent.com";

export default function LoginButton(){

    const onSuccess = (res) =>{
        console.log("Login Success! Current User: ", res.profileObj);
        localStorage.setItem('user',res.profileObj.name)
    }

    const onFailure = (res) =>{
        console.log("Login Failed!", res);
    }

    return(
        <div>
            <GoogleLogin
                clientId={client_id}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}