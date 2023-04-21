import React, {useState} from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

type Props = {
    showLoginForm: boolean
    setShowLoginForm: (showLoginForm: boolean) => void
}
const HomeForm = ({showLoginForm, setShowLoginForm}: Props) => {
    const [isRegister, setIsRegister] = useState<boolean>(false);

    const getRandomInt = () => {
        return Math.floor(Math.random() * 500);
    }

    const handleLoginClick = () => {
        setShowLoginForm(false)
    };

    const registerForm = () => {
        setIsRegister(true);
    }

    const loginForm = () => {
        setIsRegister(false);
    }

    return (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-lg bg-transparent w-4/6 h-4/6 backdrop-blur-md border-2 border-solid border-blue-100 dark:border-amber-100">
                <div className="flex flex-row w-full h-full items-center">

                    <section className="flex flex-col w-1/2 transition duration-300 ease-in-out">
                        <button className="flex justify-center p-5 text-dark dark:text-white" onClick={registerForm}>
                            Enregistrement
                        </button>
                        {
                            isRegister
                            ? <RegisterForm/>
                            : <img src={`https://picsum.photos/id/${getRandomInt()}/200/300`} alt={""}/>
                        }
                    </section>

                    <section className="flex flex-col w-1/2 transition duration-300 ease-in-out">
                        <button className="flex justify-center p-5 text-dark dark:text-white" onClick={loginForm}>
                            Connexion
                        </button>
                        {
                            isRegister
                            ? <img src={`https://picsum.photos/id/${getRandomInt()}/200/300`} alt={""} className=""/>
                            : <LoginForm showLoginForm={showLoginForm} setShowLoginForm={setShowLoginForm} />
                        }
                    </section>
                </div>

                {/*<span className="absolute right-0 p-5">*/}
                {/*    <BiBeer onClick={handleLoginClick} color="white" size="2em" className="hover:cursor-pointer"/>*/}
                {/*</span>*/}
            </div>
    );
};

export default HomeForm;