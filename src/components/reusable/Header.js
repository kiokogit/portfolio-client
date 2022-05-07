import { Button, TextField} from '@mui/material'
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ConfirmationDialog } from './Confirmation_Dialog.js';

import './dialogs.css';
import { get_guest_data } from '../../actions/actions_for_all.js';

export const Header = ({ loggedin, logout, login, register, setSearched, setWindow }) => {
    const [confirm, setConfirm] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchProfile = (e) => {
        e.preventDefault();
        const search_value = document.getElementById('search').value.trim();
        if (search_value!=='') {
            dispatch(get_guest_data(search_value))
            setSearched(true)
        } else {
            dispatch(get_guest_data())
            setSearched(false)
        }
    }

    return (
        <div className='header pad' style={{backgroundColor:'white', paddingTop:'10px'}}>
            {confirm && <ConfirmationDialog
                title={'Confirm Log out'}
                open={confirm}
                onsubmit={logout}
                oncancel={() => setConfirm(false)}
                content='You will be logged out of your account. Log out?'
            />}
            <div className='header-content' >
                <div>
                    <Button variant='outlined' onClick={(e) => {
                        if (loggedin) {
                            setWindow('cv')
                            setConfirm(true);
                        }
                        else {
                            navigate('/')
                            setWindow('landing')
                        }
                        document.getElementById('search').value=''

                    }} >Home</Button>
                    {loggedin && <Button onClick={e => {
                        e.preventDefault();
                        navigate('/user')
                        setWindow('cv')
                        document.getElementById('search').value=''
                    }}> Dashboard</Button>}
                    <TextField style={{marginLeft:'25px'}} id='search' type='search' placeholder='Search for a profile...' size='small' onChange={e=>searchProfile(e)} />
                </div>
                <div>
                    {loggedin && <Button onClick={logout} >Logout</Button>}
                    {!loggedin && <div><Button component={Link} to={login} >Login</Button> <Button component={Link} to={register} >Register</Button> </div>}
                </div>
            </div>
            <hr />
        </div>
    )
};
