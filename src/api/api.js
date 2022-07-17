import axios from 'axios'

const SERVER_URL = 'http://localhost:5000';

const API = axios.create({ baseURL: SERVER_URL});

API.interceptors.request.use(req => {
    const token = localStorage.getItem('token')
    if (token) req.headers['authorization'] = `Bearer ${token}`;
    return req
});

API.interceptors.response.use(res => {
    const token = res.headers['authorization']
    if(token || token !==undefined) {
        localStorage.setItem('token', token)
    }
    return res
})

export const login_api = (user) => API.post(`/user/login`, user);
export const register_api = (user) => API.post(`/user/register`, user);
export const logout_api = () => API.post(`/user/logout`);

export const all_profiles_api = () => API.get('/user/profiles/all');
export const current_user_api = () => API.get('/user/auth/profile/get_current');
export const user_projects_api = () => API.get('/user/auth/projects');
export const user_projects_in_brief = () => API.get('/user/auth/projects/brief')
export const get_one_project_details_api = (id) => API.get(`/user/project/details?q=${id}`)
export const add_project_api = (project)=>API.post('/user/auth/projects/add', project)
export const edit_project_api = (project) =>API.patch(`/user/auth/projects/edit/${project._id}`, project)

export const guest_search_api = (query) => API.get(`guest/search?q=${query}`);

export const edit_user_cv = (body)=>API.patch('/user/auth/profile/edit', body)