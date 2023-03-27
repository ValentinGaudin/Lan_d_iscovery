import {createContext, ReactNode, useContext, useEffect, useState} from "react";

type ThemeContext = {
    theme: string | null,
    setTheme: (theme: string) => void,
}

type Props = {
    children: ReactNode
}

const CurrentThemeContext = createContext<ThemeContext>({
    theme: "dark",
    setTheme: () => {},
})

export const useThemeContext = () => useContext(CurrentThemeContext);

const ThemeProvider = ({ children }: Props) =>  {
    const [theme, setTheme] = useState<string | null>(null);

    useEffect(() => {
        if (theme && theme === "dark") {
            setTheme('dark')
            localStorage.setItem("theme", 'dark')
            document.documentElement.classList.add('dark')
        }
        if (theme && theme === "light") {
            setTheme('light')
            localStorage.setItem("theme", 'light')
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    useEffect(() => {
        const storageTheme = localStorage.getItem('theme');
        if (storageTheme && storageTheme === 'dark') {
            document.documentElement.classList.add('dark')
            setTheme('dark')
        }
        if (storageTheme && storageTheme === 'light') {
            document.documentElement.classList.remove('dark')
            setTheme('light')
        }
    }, [])


    return (
        <CurrentThemeContext.Provider value={{
            theme,
            setTheme,
        }}>
            {children}
        </CurrentThemeContext.Provider>
    )
}

export default ThemeProvider;