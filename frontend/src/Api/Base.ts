import axios, {AxiosResponse} from 'axios';

export const BASE_URL = import.meta.env.VITE_BASE_API_URL;
console.log(BASE_URL)
function login(email: string, password: string): Promise<AxiosResponse> {
    return axios.post(`${BASE_URL}/login`, {
            email: email,
            password: password,
            // remember: remember
    }).then((response) =>
        response.data.data
    );
}

function logout(): Promise<AxiosResponse> {
    return axios.post(`${BASE_URL}/logout`).then((response) =>
        response.data.data
    );
}

function register(name: string, email: string, password: string): Promise<AxiosResponse> {
    return axios.post(`${BASE_URL}/register`, {
            name: name,
            email: email,
            password: password,
    }).then((response) =>
        response.data.data
    );
}


export { login, logout, register };