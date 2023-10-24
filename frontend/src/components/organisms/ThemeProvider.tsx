import React, {
	createContext,
	PropsWithChildren,
	useEffect,
	useState,
} from 'react';

import { ThemeKey, ThemeContext as Context } from '@/types/Theme';
import { Nullable } from '@/types/Common';

export const ThemeContext = createContext<Context>({
	theme: 'dark',
	setTheme: () => {},
	toggleTheme: () => {},
});

const ThemeProvider = ({ children }: PropsWithChildren) => {
	const [theme, setTheme] = useState<Nullable<ThemeKey>>(null);

	const toggleTheme = () => {
		if (theme === 'dark') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	};

	useEffect(() => {
		if (theme === 'dark') {
			setTheme('dark');
			localStorage.setItem('theme', 'dark');
			document.documentElement.classList.add('dark');
		} else if (theme === 'light') {
			setTheme('light');
			localStorage.setItem('theme', 'light');
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	useEffect(() => {
		const storageTheme = localStorage.getItem('theme');
		if (storageTheme) {
			if (storageTheme === 'dark') {
				document.documentElement.classList.add('dark');
				setTheme('dark');
			}
			if (storageTheme === 'light') {
				document.documentElement.classList.remove('dark');
				setTheme('light');
			}
		} else {
			setTheme('dark');
			localStorage.setItem('theme', 'dark');
			document.documentElement.classList.add('dark');
		}
	}, []);

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
				toggleTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
