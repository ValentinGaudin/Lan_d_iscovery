import React, {useState} from "react";
import axios, {AxiosResponse} from "axios";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useUserContext} from "../Provider/AuthProvider";
import { BiBeer } from 'react-icons/bi';

type Props = {
    showLoginForm: boolean
    setShowLoginForm: (showLoginForm: boolean) => void
}
const LoginForm = ({showLoginForm, setShowLoginForm}: Props) => {
    const [error, setError] = useState<string>("");
    const {
        setCurrentUser,
        setIsConnected,
        setToken,
    } = useUserContext();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .required('Required'),
        }),
        onSubmit: values => {
            axios.post(
                "http://backend.adventurer.localhost/api/login", {
                    email: values.email,
                    password : values.password,
                },{
                    headers: {
                        'Content-Type':'multipart/form-data'
                    }
                },
            ).then(function (response: AxiosResponse) {
                setIsConnected(true);
                setToken(response.data.token);
                setCurrentUser(response.data.user);
            })
            .catch(function (error) {
                setError(error.response.data);
            });
        },
    });

    const handleLoginClick = () => {
        setShowLoginForm(false)
    };

    return (
        <div className="absolute bg-gray-500 w-full h-full bg-opacity-80" >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-lg bg-primary w-3/6 h-3/6">
                <span className="absolute right-0 p-5">
                    <BiBeer onClick={handleLoginClick} color="white" size="2em" className="hover:cursor-pointer"/>
                </span>
                <form onSubmit={formik.handleSubmit}>
                    <div className="p-10">
                        <div className="mb-4">
                            <label className="block text-base font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-500 text-xs italic">{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className="mb-6">
                            <label
                                className="block text-base font-bold mb-2"
                                htmlFor="password"
                            >
                                Mot de passe
                            </label>
                            <input
                                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="******"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-red-500 text-xs italic">{formik.errors.password}</div>
                            ) : null}

                            {/*{error ? <p className="text-red-500 text-xs italic">{error}</p> : null}*/}

                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-secondary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline fixed bottom-10"
                                type="submit"
                            >
                                Connexion
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;