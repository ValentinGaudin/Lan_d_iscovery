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
            remember: false
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .required('Required'),
            remember: Yup.boolean()
                .nullable()
        }),
        onSubmit: values => {
            axios.post(
                "http://backend.thelaboratory.localhost/api/login", {
                    email: values.email,
                    password : values.password,
                    remember: values.remember
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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-lg bg-transparent w-3/6 backdrop-blur-md border-2 border-solid dark:border-amber-100 border-blue-100">
                <span className="absolute right-0 p-5">
                    <BiBeer onClick={handleLoginClick} color="white" size="2em" className="hover:cursor-pointer"/>
                </span>
                <h3 className="flex justify-center p-5 text-white dark:text-base">
                    Connexion
                </h3>
                <form onSubmit={formik.handleSubmit} className="flex justify-center items-center">
                    <div className="w-3/4 p-10 flex flex-col items-center">
                        <div className="md:flex md:items-center mt-4 mb-6 w-full">
                            <label
                                className="block text-base dark:text-white font-bold w-3/12"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 dark:text-blue-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
                        <div className="md:flex md:items-center mt-4 mb-6 w-full">
                            <label
                                className="block text-base dark:text-white font-bold w-3/12"
                                htmlFor="password"
                            >
                                Mot de passe
                            </label>
                            <input
                                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 dark:text-blue-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
                        <div className="flex flex-col justify-center">
                            <label htmlFor="remember">
                                Se souvenir de moi ?
                            </label>
                            <input
                                id="remember"
                                type="checkbox"
                                onChange={formik.handleChange}
                            />
                        </div>
                        <button
                            className="bg-secondary hover:bg-tertiary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                            type="submit"
                        >
                            Connexion
                        </button>
                    </div>
                </form>
            </div>
    );
};

export default LoginForm;