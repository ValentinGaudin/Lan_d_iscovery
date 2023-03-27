import animation from './Styles/animation.module.css'
import './App.css';
import React, {useEffect} from "react";
import {BsFillMoonFill, BsSun} from "react-icons/all";
import Navbar from "./Components/NavBar"
import ThemeProvider, {useThemeContext} from "./Provider/ThemeProvider";
import AuthProvider from "./Provider/AuthProvider";
import Project from "./Components/Project";

function App() {
    const {theme, setTheme} = useThemeContext();

    const toggleTheme = () => {
        theme === 'dark'
            ? setTheme('light')
            : setTheme('dark')
    }

    return (
        <>
            <Navbar/>
            <Project/>

            <div className="absolute bottom-10 right-10 flex mx-auto p-2">
                {
                    theme && theme === 'light'
                        ? <button
                            className="flex items-center justify-center rounded-lg bg-base dark:bg-white w-[30px] h-[30px] rounded-lg"
                            onClick={toggleTheme} value="light">
                            <BsFillMoonFill className="z-10" fill="white"/>
                        </button>
                        : <button
                            className="flex items-center justify-center rounded-lg bg-base dark:bg-white w-[30px] h-[30px]"
                            onClick={toggleTheme} value="dark">
                            <BsSun className="z-10" fill="base"/>
                        </button>
                }
            </div>
        </>
    )
}

const AppWrapper = () => {
    return (
        <main className="flex flex-col items-center relative min-h-screen bg-white dark:bg-base">
            <div className={animation.glow_blue}></div>
            <div className={animation.glow_green}></div>

            <ThemeProvider>
                <AuthProvider >
                    <App/>
                </AuthProvider>
            </ThemeProvider>
        </main>
    )
}
export default AppWrapper
