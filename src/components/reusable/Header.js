import { Button, TextField} from '@mui/material'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ConfirmationDialog } from './Confirmation_Dialog.js';

import './dialogs.css';

export const Header = ({ loggedin, logout, login, register }) => {
    const [confirm, setConfirm] = useState(false)

    return (
        <div className='header pad' >
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
                        if(loggedin) setConfirm(true);
                    }} >Home</Button>
                    {loggedin && <Button component={Link} to='/user'> Dashboard</Button>}
                </div>
                <div>
                    Welcome to Portfolio Display Site
                </div>
                <div>
                    {loggedin && <Button onClick={logout} >Logout</Button>}
                    {!loggedin && <div><Button component={Link} to={login} >Login</Button> <Button component={Link} to={register} >Register</Button> </div>}
                </div>
            </div>
            <hr/>
            <TextField id='search' type='search' placeholder='Search for a profile...' size='small' />
        </div>
    )
};
