import * as api from '../api/api';

export const login_action = async(user,navigate, setError)=> {
    try {

        await api.login_api(user);
        //token not sent as a payload, but as a header
        setError(null)
        navigate(`/user`, {replace:true})
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

export const current_user_profile_action = () => async (dispatch) => {
    try {
        const { data } = await api.current_user_api();
        dispatch({ type: 'CURRENT_PROFILE', payload: data });

    } catch (e) {
        console.log(e);
    }
}


export const user_projects_action = () => async (dispatch) => {
    try {
        
        const { data } = await api.user_projects_api();
        dispatch({ type: 'USER_PROJECTS', payload: data });

    } catch (e) {
        console.log(e)
    }
}

export const user_projects_in_brief_action = () => async (dispatch) => {
    try {
        
        const { data } = await api.user_projects_in_brief();
        dispatch({ type: 'USER_PROJECTS_BRIEF', payload: data });

    } catch (e) {
        console.log(e)
    }
}

export const get_one_project_details_action = (id) => async(dispatch) =>{
    try{

        const {data} = await api.get_one_project_details_api(id)
        dispatch({type:'PROJECT_DETAILS', payload:data})
        
    }catch(e){

    }
}

export const editcv = async(body, setError, setSuccess) =>{
    try {
        const {data} = await api.edit_user_cv(body);
        setSuccess(data)
        return true
    } catch (e) {
        setError(e.response.data)
        return false
    }
}

export const add_project_action = async(project, setError, setSuccess)=>{
    try{
        const {data} = await api.add_project_api(project);
        setSuccess(data)
        return true
    }catch(e){
        setError(e.response.data)
        return false
    }
}

export const edit_project_action = async(project, setError, setSuccess)=>{
    try{
        const {data} = await api.edit_project_api(project);
        setSuccess(data)
        return true
    }catch(e){
        setError(e.response.data)
        return false
    }
}