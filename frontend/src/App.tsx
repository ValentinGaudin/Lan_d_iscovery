import './App.css'
import Navbar from "./Components/NavBar";
import Home from "./Components/Home";
import AuthProvider from "./Provider/AuthProvider";
import React from "react";
import ThemeProvider, {useThemeContext} from "./Provider/ThemeProvider";
import {BsFillMoonFill, BsSun} from "react-icons/all";

function App() {
	const {
		theme,
		setTheme
	} = useThemeContext();

	const toggleTheme = () => {
		theme === 'dark'
			? setTheme('light')
			: setTheme('dark')
	}
	const storageTheme = localStorage.getItem('theme');
	if (!theme && storageTheme) {
		setTheme(storageTheme);
	}

	return (
		<>
			<Navbar />
			<Home />

			<div className="absolute bottom-10 right-10 flex mx-auto p-2">
				{
					theme && theme === 'light'
						? <button className="flex items-center justify-center rounded-lg bg-base dark:bg-white w-[30px] h-[30px] rounded-lg" onClick={toggleTheme} value="light">
							<BsFillMoonFill className="z-10" fill="white"/>
						</button>
						: <button className="flex items-center justify-center rounded-lg bg-base dark:bg-white w-[30px] h-[30px]" onClick={toggleTheme} value="dark">
							<BsSun className="z-10" fill="base"/>
						</button>
				}
			</div>
		</>
	)
}

const AppWrapper = () => {
	return (
		<div className="App bg-white dark:bg-base w-screen h-screen">

			<ThemeProvider >
				<AuthProvider >
					<App />
				</AuthProvider>
			</ThemeProvider>

		</div>
	)
}
export default AppWrapper
