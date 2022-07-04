import { useDispatch } from 'react-redux';

import './dialogs.css';
import { get_guest_data } from '../../actions/actions_for_all.js';

export const SearchHeader = () => {
    const dispatch = useDispatch();

    const searchProfile = (e) => {
        e.preventDefault();
        const search_value = document.getElementById('search').value.trim();
        if (search_value !== '') {
            dispatch(get_guest_data(search_value))
        } else {
            dispatch(get_guest_data())
        }
    }

    return (
       
        <input id='search' type='search' placeholder='Search for a profile...' size='small' onChange={e => searchProfile(e)} />
    )
};


export const LoggedInHeader = ({ logout, setWindow, setSearched }) => {
    return (
        <div className='second-header'>
            <div>
                <button onClick={(e) => {
                    e.preventDefault()
                    setWindow('cv')
                    document.getElementById('search').value = ''
                }}>Dashboard</button>
            </div>
            <SearchHeader setSearched={setSearched} />
            <div>
                <button onClick={logout} >Logout</button>
            </div>
        </div>
    )
};

export const GuestHeader = () => {
    return (
        <div style={{height:'50px'}}>
            <button><a href='/'>Home</a></button>
            <button><a href='/login'>Login</a></button>
            <button><a href='/register'>Register</a></button>
        </div>
    )
}