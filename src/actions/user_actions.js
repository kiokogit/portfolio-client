import * as api from '../api/api';

export const login_action = async(user, setError)=> {
    try {

        const { data } = await api.login_api(user);
        localStorage.setItem('token', data);
        setError(null)
        return true
        
    } catch (e) {
        setError(e.response.data)
        return false
    }
}
export const register_action = async (user, setError, setSuccess)=> {
    try {

        const { data } = await api.register_api(user);
        setError(null)
        setSuccess(data)
        return true
        
    } catch (e) {
        setError(e.response.data)
        return false
    }
};

export const logout_action = async (navigate) => {
    try {
        await api.logout_api();
        localStorage.removeItem('token')
        navigate('/', {replace:true})
        return true

    } catch (e) {
        return false
    }
}

export const current_user_profile_action = (navigate) => async (dispatch) => {
    try {
        const { data } = await api.current_user_api();
        dispatch({ type: 'CURRENT_PROFILE', payload: data });

    } catch (e) {
        console.log(e);
    }
}
