import { Button, DialogActions, DialogContent, DialogTitle, Paper, TextField } from '@mui/material';
import React from 'react'


import './dialogs.css';

export const LoginForm = ({ onsubmit }) => {
    return (
        <form className='form' onSubmit={onsubmit}>
            <Paper className='content pad' >
            <div>Don't have an account yet? Register <a href='/register'>here</a></div>
                <DialogTitle className='center' >
                    Login
                </DialogTitle>
                <DialogContent>
                    <TextField style={{marginTop:'10px'}} id='email_username' label='Email/Username' type='text' variant='outlined' required fullWidth />
                    <TextField style={{marginTop:'10px'}} id='password' label='Password' type='password' variant='outlined' required fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' type='submit' color='primary' fullWidth >Submit</Button>
                    <Button variant='outlined' type='reset' color='secondary' fullWidth >Clear</Button>
                </DialogActions>
            </Paper>
        </form>
    )
};

export const RegistrationForm = ({ onsubmit }) => {
    return (
        <form className='form' onSubmit={onsubmit} >
            <Paper className='content pad' >
            <div>Already have an account? Proceed to <a href='/login'>Login</a></div>
                <DialogTitle>
                    Register as a New User
                </DialogTitle>
                <DialogContent >
                    <div></div>
                    <TextField style={{marginTop:'10px'}} id='fname' label='First Name' variant='outlined' required fullWidth />
                    <TextField style={{marginTop:'10px'}} id='lname' label='Last Name' variant='outlined' required fullWidth />
                    <TextField style={{marginTop:'10px'}} id='username' label='User Name' variant='outlined' required fullWidth />
                    <TextField style={{marginTop:'10px'}} id='email' label='Email' type='email' variant='outlined' required fullWidth />
                    <TextField style={{marginTop:'10px'}} id='password1' label='Password' type='password' variant='outlined' required fullWidth />
                    <TextField style={{marginTop:'10px'}} id='password2' label='Confirm Password' type='password' variant='outlined' required fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button type='submit' variant='outlined' color='primary' fullWidth >Submit</Button>
                    <Button type='reset' variant='outlined' color='secondary' fullWidth >Clear</Button>
                </DialogActions>
            </Paper>
        </form>
    )
};
