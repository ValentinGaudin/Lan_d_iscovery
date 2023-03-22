import React, { useState } from 'react';
import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';

const GoogleSignIn = () => {
    const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const [isSignedIn, setIsSignedIn] = useState(false);
    const onSuccess = (response) => {
        console.log(response);
    };

    const onFailure = (response) => {
        console.error(response);
    };

    return (
        <div>
            {isSignedIn ? (
                <h1>You are signed in with Google!</h1>
            ) : (

                <GoogleOAuthProvider
                    clientId={googleClientId}
                    buttonText="Sign in with Google lol"
                >

                    <GoogleLogin
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                    />

                </GoogleOAuthProvider>
            )}
        </div>
    );
};


export default GoogleSignIn;