import React, {useState} from "react";
import axios, {AxiosResponse} from "axios";

// interface IAuthProps {
//     isAuthenticated: boolean;
//     setAuthenticatedStatus: (authenticated: boolean) => void;
// }

const LoginForm = ({ isAuthenticated, setAuthenticatedStatus}: IAuthProps) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const handleSubmit = async (e: any) => {
        await axios.post(
            "http://api.thelabs.localhost/api/login", {
                email,
                password
            },{ headers: {
                    'Content-Type':'multipart/form-data'
                }
        },
        ).then(function (response: AxiosResponse) {
            console.log(response.data);
            localStorage.setItem("token", response.data.token);
            setAuthenticatedStatus(true);
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    return (
        <form onSubmit={handleSubmit} method="POST">
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-6">
                <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="password"
                >
                    Mot de passe
                </label>
                <input
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                    <p className="text-red-500 text-xs italic">{error}</p>
                )}
            </div>
            <div className="flex items-center justify-center">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Connexion
                </button>
            </div>
        </form:>
    );
};

export default LoginForm;