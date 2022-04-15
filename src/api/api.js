import axios from 'axios'

const SERVER_URL = 'http://localhost:5000';

const API = axios.create({ baseURL: SERVER_URL});

API.interceptors.request.use(req => {
    const token = localStorage.getItem('token')
    if (token) req.headers['authorization'] = `Bearer ${token}`;
    return req
});

export const login_api = (user) => API.post(`/user/login`, user);
export const register_api = (user) => API.post(`/user/register`, user);
export const logout_api = () => API.post(`/user/logout`);

export const all_profiles_api = () => API.get('/user/profiles/all');
export const current_user_api = () => API.get('/user/profile/get_current');