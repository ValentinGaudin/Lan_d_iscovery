import axios from 'axios';
import type { AxiosResponse } from 'axios';
import { User } from '@/types/User';

export const BASE_URL = 'http://backend.thelaboratory.localhost/api';

async function login(email: string, password: string): Promise<User> {
	const response: AxiosResponse<User> = await axios.post(`${BASE_URL}/login`, {
		email,
		password,
		// remember: remember
	});
	return response.data;
}

async function logout(): Promise<AxiosResponse> {
	const response = await axios.post(`${BASE_URL}/logout`);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	return response.data.data;
}

async function register(
	name: string,
	email: string,
	password: string
): Promise<AxiosResponse> {
	const response = await axios.post(`${BASE_URL}/register`, {
		name,
		email,
		password,
	});
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	return response.data.data;
}

export { login, logout, register };
