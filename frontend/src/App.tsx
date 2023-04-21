import animation from './Styles/animation.module.css'
import './App.css';
import React from "react";
import {BsFillMoonFill, BsSun} from "react-icons/all";
import ThemeProvider, {useThemeContext} from "./Provider/ThemeProvider";
import AuthProvider from "./Provider/AuthProvider";
import MainRoot from "./Routes/MainRoot";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Footer from "./Components/Footer";


function App() {
    const {theme, setTheme} = useThemeContext();

    const toggleTheme = () => {
        theme === 'dark'
            ? setTheme('light')
            : setTheme('dark')
    }

    return (
        <>
            {
                theme && theme === 'light'
                    ? <button
                        className="fixed bottom-10 right-10 flex mx-auto p-2 z-50 flex items-center justify-center rounded-lg bg-base dark:bg-white w-[30px] h-[30px] rounded-lg"
                        onClick={toggleTheme} value="light">
                        <BsFillMoonFill className="z-10" fill="white"/>
                    </button>
                    : <button
                        className="fixed bottom-10 right-10 flex mx-auto p-2 z-50 flex items-center justify-center rounded-lg bg-base dark:bg-white w-[30px] h-[30px]"
                        onClick={toggleTheme} value="dark">
                        <BsSun className="z-10" fill="base"/>
                    </button>
            }
        </>
    )
}

const AppWrapper = () => {
    const queryClient = new QueryClient()
    return (
        <>
            <main className="w-screen h-screen bg-white dark:bg-base">
                <ThemeProvider>
                    <AuthProvider >
                        <QueryClientProvider client={queryClient}>
                            <section id="container">
                                <div className={animation.glow_blue}></div>
                                <div className={animation.glow_green}></div>
                                    <section className="flex flex-col">
                                        <MainRoot />
                                        <App/>
                                    </section>
                            </section>
                        </QueryClientProvider>
                    </AuthProvider>
                </ThemeProvider>
            </main>
        </>

    )
}
export default AppWrapper
