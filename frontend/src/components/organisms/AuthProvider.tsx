import React, {
	createContext,
	PropsWithChildren,
	useEffect,
	useState,
} from 'react';

const USER_KEY = 'user';
const TOKEN_KEY = 'token';

import { User } from '@/types/User';
import { AuthContext as Context } from '@/types/Auth';
import { Nullable } from '@/types/Common';

export const AuthContext = createContext<Context>({
	isConnected: false,
	user: null,
	setUser: () => {},
	token: null,
	setToken: () => {},
});

const AuthProvider = ({ children }: PropsWithChildren) => {
	const [isConnected, setIsConnected] = useState(false);
	const [user, setUser] = useState<Nullable<User>>(null);
	const [token, setToken] = useState<Nullable<string>>('');

	useEffect(() => {
		if (user) {
			setIsConnected(true);
			localStorage.setItem(USER_KEY, JSON.stringify(user));
			localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
		} else {
			setIsConnected(false);
			localStorage.removeItem('user');
		}
	}, [user]);

	useEffect(() => {
		const savedUser = localStorage.getItem(USER_KEY);
		const savedToken = localStorage.getItem(TOKEN_KEY);
		if (savedUser && savedToken) {
			setIsConnected(true);
			setToken(JSON.parse(savedToken) as string);
			setUser(JSON.parse(savedUser) as User);
		} else {
			setIsConnected(false);
			setUser(null);
		}
	}, []);

	return (
		<AuthContext.Provider
			value={{
				isConnected,
				user,
				setUser,
				token,
				setToken,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
