import React from 'react'

import './dialogs.css';

export const LoginForm = ({ onsubmit }) => {
    return (
        <form className='form' onSubmit={onsubmit}>
            <div className='content pad' >
                <div>
                    <a href="/">Home</a>
                </div>
            <small>Don't have an account yet? Register <a href='/register'>here</a></small>
                <header className='center' >
                    Login
                </header>
                <div>
                    <input style={{marginTop:'10px'}} id='email_username' label='Email/Username' type='text' variant='outlined' required fullWidth />
                    <input style={{marginTop:'10px'}} id='password' label='Password' type='password' variant='outlined' required fullWidth />
                </div>
                <div>
                    <button variant='outlined' type='submit' color='primary' fullWidth >Submit</button>
                    <button variant='outlined' type='reset' color='secondary' fullWidth >Clear</button>
                </div>
            </div>
        </form>
    )
};

export const RegistrationForm = ({ onsubmit }) => {
    return (
        <form className='form' onSubmit={onsubmit} >
            <div className='content pad' >
            <div>
                    <a href="/">Home</a>
                </div>
            <small>Already have an account? Proceed to <a href='/login'>Login</a></small>
                <header>
                    Register as a New User
                </header>
                <div >
                    <div></div>
                    <div><label>First Name</label></div>
                    <input style={{marginTop:'10px'}} id='fname' label='First Name' variant='outlined' required fullWidth />
                    <div><label>Last Name</label></div>
                    <input style={{marginTop:'10px'}} id='lname' label='Last Name' variant='outlined' required fullWidth />
                    <div><label htmlFor='username'>Username</label></div>
                    <input style={{marginTop:'10px'}} id='username' label='User Name' variant='outlined' required fullWidth />
                    <div><label>Email</label></div>
                    <input style={{marginTop:'10px'}} id='email' label='Email' type='email' variant='outlined' required fullWidth />
                    <div><label>Password</label></div>
                    <input style={{marginTop:'10px'}} id='password1' label='Password' type='password' variant='outlined' required fullWidth />
                    <div><label>Confirm Password</label></div>
                    <input style={{marginTop:'10px'}} id='password2' label='Confirm Password' type='password' variant='outlined' required fullWidth />
                </div>
                <div>
                    <button type='submit' variant='outlined' color='primary' fullWidth >Submit</button>
                    <button type='reset' variant='outlined' color='secondary' fullWidth >Clear</button>
                </div>
            </div>
        </form>
    )
};
