import React, {useState} from 'react';
import LoginForm from './LoginForm';
import axios, {AxiosResponse} from "axios";

const Navbar = () => {
    const [showLoginForm, setShowLoginForm] = useState<boolean>(false);
    const [isAuthenticated, setAuthenticatedStatus] = useState<boolean>(false);

    const handleDisconnectForm = async () => {
        await axios.post(
            "http://api.thelabs.localhost/api/logout",
        ).then(function (response: AxiosResponse) {
            localStorage.removeItem("token");
            setAuthenticatedStatus(false);
        }).catch(function (err: string) {
            console.log(err);
        });

    };
    const handleLoginClick = () => {
        showLoginForm
            ? setShowLoginForm(false)
            : setShowLoginForm(true)
    };

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-white">
                            My app de TOTO
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            {
                                !isAuthenticated
                                    ?
                                    <button
                                        onClick={handleLoginClick}
                                        className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Login
                                    </button>
                                    :
                                    <div>
                                        <p>
                                            Logged
                                        </p>
                                    <button onClick={handleDisconnectForm}>
                                        Disconnect
                                    </button>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {showLoginForm && <LoginForm isAuthenticated={isAuthenticated} setAuthenticatedStatus={setAuthenticatedStatus} />}
        </nav>
    );
}
export default Navbar;
