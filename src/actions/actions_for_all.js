import * as api from '../api/api'

export const all_profiles_actions = () =>async(dispatch)=> {
    
    try {
        
        const { data } = await api.all_profiles_api();
        dispatch({type:'ALL_USERS', payload:data})

    } catch (e) {
        console.log(e.response)
    }
};