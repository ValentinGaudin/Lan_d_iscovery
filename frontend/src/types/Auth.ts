import { User } from './User';
import { Nullable } from './Common';

export type AuthContext = {
	isConnected: boolean;
	user: Nullable<User>;
	setUser: (user: Nullable<User>) => unknown;
	token: Nullable<string>;
	setToken: (token: Nullable<string>) => unknown;
};
