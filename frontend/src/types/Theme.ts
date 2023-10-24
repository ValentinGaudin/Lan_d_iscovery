import { Nullable } from './Common';

export type ThemeKey = 'light' | 'dark';

export type ThemeContext = {
	theme: Nullable<ThemeKey>;
	setTheme: (theme: ThemeKey) => unknown;
	toggleTheme: () => unknown;
};
