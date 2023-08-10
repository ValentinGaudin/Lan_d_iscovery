import animation from './Styles/animation.module.css'
import './App.css';
import React from "react";
import ThemeProvider from "./Provider/ThemeProvider";
import AuthProvider from "./Provider/AuthProvider";
import MainRoot from "./Routes/MainRoot";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Footer from "./Components/Footer";

const App = () => {
    const queryClient = new QueryClient()

    return (
        <>
            <main className="bg-white dark:bg-base">
                <ThemeProvider>
                    <AuthProvider>
                        <QueryClientProvider client={queryClient}>
                            <span className={animation.glow_blue}></span>
                            <span className={animation.glow_green}></span>

                            <MainRoot/>
                            <Footer/>

                        </QueryClientProvider>
                    </AuthProvider>
                </ThemeProvider>
            </main>
        </>
    )
}

export default App;
