import { useDispatch } from 'react-redux';
import { useState } from 'react';

import './dialogs.css';
import { get_guest_data } from '../../actions/actions_for_all.js';

export const SearchHeader = ({reset_data}) => {
    const dispatch = useDispatch();
    const [startSearch, setStartSearch] = useState(false)

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
       <div className='rowflex'>
            {!startSearch && <button className='fwrdbtn' onClick={()=>setStartSearch(true)}>Search</button> }
            {startSearch && <div className='rowflex'><input id='search' type='search' placeholder='Search for a profile...' size='small' onChange={e => searchProfile(e)} />
            <button className='cancelbtn' onClick={(e)=>{
					reset_data(e)
                    setStartSearch(false)
				}} >Reset</button>
            </div>}
            
        </div>
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
        <div className='navbar'>
            <div className=' rowflex'>
                <div>
                    <a href='/'>Home</a>
                </div>
                <div>
                    <a href='/login'>Login</a>
                    <a href='/register'>Register</a>
                </div>
            </div>
            <hr/>
        </div>
    )
}