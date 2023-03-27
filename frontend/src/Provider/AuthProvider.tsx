'use client';
import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {User} from "../@types/User";

type AuthContext = {
    isConnected : boolean,
    setIsConnected: (isConnected: boolean) => void,
    currentUser: User | null,
    setCurrentUser:(user: User |  null) => void,
    token: string | null,
    setToken: (token: string | null) => void,
}

type Props = {
    children: ReactNode
}

const CurrentUserContext = createContext<AuthContext>({
    isConnected: false,
    setIsConnected: () => {},
    currentUser: null,
    setCurrentUser: () => {},
    token: null,
    setToken: () => {},
})

export const useUserContext = () => useContext(CurrentUserContext)

const AuthProvider = ({ children }: Props) =>  {
    const [isConnected, setIsConnected] = useState(false)
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [token, setToken] = useState<string | null>(null)

    useEffect(() => {
        if (token) {
            setIsConnected(true);
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(currentUser))
        } else {
            setIsConnected(false);
        }
    }, [token])

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        const savedUser = localStorage.getItem("user");
        if (savedToken && savedUser) {
            setToken(savedToken);
            setCurrentUser(JSON.parse(savedUser));
        }
    }, [])

    return (
        <CurrentUserContext.Provider value={{
            isConnected,
            setIsConnected,
            currentUser,
            setCurrentUser,
            token,
            setToken,
        }}>
            {children}
        </CurrentUserContext.Provider>
    );
};

export default AuthProvider;