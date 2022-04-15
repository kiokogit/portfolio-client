import { Button, DialogActions, DialogContent, DialogTitle, Paper, TextField } from '@mui/material';
import React from 'react'


import './dialogs.css';

export const LoginForm = ({ onsubmit }) => {
    return (
        <form className='form' onSubmit={onsubmit}>
            <Paper >
                <DialogTitle>
                    Login
                </DialogTitle>
                <DialogContent className='content pad'>
                    <TextField className='small-input pad' id='email' label='Email' type='email' variant='outlined' required fullWidth />
                    <TextField className = 'small-input pad' id='password' label='Password' type='password' variant='outlined' required fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button type='submit' color='primary' fullWidth >Submit</Button>
                    <Button type='reset' color='secondary' fullWidth >Cancel</Button>
                </DialogActions>
            </Paper>
        </form>
    )
};

export const RegistrationForm = ({ onsubmit }) => {
    return (
        <form className='form' onSubmit={onsubmit} >
            <Paper >
                <DialogTitle>
                    Register as a New User
                </DialogTitle>
                <DialogContent className='content pad' >
                    <div></div>
                    <TextField className='small-input pad' id='fname' label='First Name' variant='outlined' required fullWidth />
                    <TextField className='small-input pad' id='lname' label='Last Name' variant='outlined' required fullWidth />
                    <TextField className='small-input pad' id='email' label='Email' type='email' variant='outlined' required fullWidth />
                    <TextField className='small-input pad' id='password1' label='Password' type='password' variant='outlined' required fullWidth />
                    <TextField className='small-input pad' id='password2' label='Confirm Password' type='password' variant='outlined' required fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button type='submit' variant='filled' color='primary' fullWidth >Submit</Button>
                    <Button type='reset' variant='outlined' color='secondary' fullWidth >Cancel</Button>
                </DialogActions>
            </Paper>
        </form>
    )
};
