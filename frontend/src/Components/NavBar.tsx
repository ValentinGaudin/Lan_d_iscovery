import React, {useEffect, useState} from 'react';
import LoginForm from './LoginForm';
import axios, {AxiosResponse} from "axios";
import {useUserContext} from "../Provider/AuthProvider";
import logo from "../assets/logo.png";

const Navbar = () => {
    const [showLoginForm, setShowLoginForm] = useState<boolean>(false);

    const {
        isConnected,
        setIsConnected,
        currentUser
    } = useUserContext();

    const handleDisconnectForm = async () => {
        await axios.post(
            "http://api.thelabs.localhost/api/logout",
        ).then(function (response: AxiosResponse) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            setIsConnected(false)
        }).catch(function (err: string) {

        });
    };

    const handleLoginClick = () => {
        showLoginForm
            ? setShowLoginForm(false)
            : setShowLoginForm(true)
    };



    return (
        <nav className="bg-base">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-solid border-white" onClick={handleLoginClick}>
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-base flex items-center">
                            <span>
                                <img src={logo} className="h-8 w-auto mr-2"
                                     alt=""/>
                            </span>
                            <p className="text-white">
                                The labs
                            </p>
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            {
                                !isConnected
                                    ?
                                    <button
                                        onClick={handleLoginClick}
                                        className="bg-secondary text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Login
                                    </button>
                                    :
                                    <div>
                                        <p>
                                            {currentUser?.full_name}
                                        </p>
                                        <button className="text-white bg-secondary" onClick={handleDisconnectForm}>
                                            Disconnect
                                        </button>
                                    </div>
                            }

                        </div>

                    </div>

                </div>
            </div>
            {showLoginForm  && !isConnected && <LoginForm showLoginForm={showLoginForm} setShowLoginForm={setShowLoginForm}/>}
        </nav>
    );
}
export default Navbar;
