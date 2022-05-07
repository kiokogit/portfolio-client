import * as api from '../api/api'

export const get_guest_data = (query) =>async(dispatch)=> {
    
    try {
        
        if (query) {
            const { data } = await api.guest_search_api(query);
            dispatch({ type: 'GUEST_DATA', payload: data })
        } else {
            dispatch({type:'RESET_DATA'})
        }
    } catch (e) {
        console.log(e.response)
    }
};