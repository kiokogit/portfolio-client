import React from 'react'

import './dialogs.css';

export const LoginForm = ({ onsubmit }) => {
    return (
        <form className='form' onSubmit={onsubmit}>
            <div className='content pad' >
                
                <header className='center' >
                    <h4>Login</h4>
                </header>
                <div>
                    <div><label>Email/Username</label></div>
                    <input className='input fullwidth' style={{marginTop:'10px'}} id='email_username' placeholder='Email/Username' type='text' />
                    <div><label>Password</label></div>
                    <input className='input fullwidth' style={{marginTop:'10px'}} id='password' placeholder='Password' type='password' />
                </div>
                <div>
                    <p></p>
                    <button className='fwrdbtn' type='submit' >Submit</button>
                    <button className='cancelbtn' type='reset'>Clear</button>
                </div>
                <p></p>
                <p></p>
            <small>Don't have an account yet? Register <a href='/register'>here</a></small>
                <div>
                    <hr/>
                    <a href="/">Home</a>
                </div>
            </div>
        </form>
    )
};

export const RegistrationForm = ({ onsubmit }) => {
    return (
        <form className='form' onSubmit={onsubmit} >
            <div className='content pad' >
                <header>
                    <h4>Register as a New User</h4>
                </header>
                <div >
                    <div></div>
                    <div>First Name</div>
                    <input style={{marginTop:'10px'}} id='fname' placeholder='First Name' variant='outlined' required fullWidth />
                    <div>Last Name</div>
                    <input style={{marginTop:'10px'}} id='lname' placeholder='Last Name' variant='outlined' required fullWidth />
                    <div>Username</div>
                    <input style={{marginTop:'10px'}} id='username' placeholder='User Name' variant='outlined' required fullWidth />
                    <div>Email</div>
                    <input style={{marginTop:'10px'}} id='email' placeholder='Email' type='email' variant='outlined' required fullWidth />
                    <div>Password</div>
                    <input style={{marginTop:'10px'}} id='password1' placeholder='Password' type='password' variant='outlined' required fullWidth />
                    <div>Confirm Password</div>
                    <input style={{marginTop:'10px'}} id='password2' placeholder='Confirm Password' type='password' variant='outlined' required fullWidth />
                </div>
                <div>
                    <p></p>
                    <p></p>
                    <button className='fwrdbtn' type='submit' variant='outlined' fullWidth >Submit</button>
                    <button className='cancelbtn' type='reset' variant='outlined' fullWidth >Clear</button>
                </div>
                <p></p>
                <p></p>
            <small>Already have an account? Proceed to <a href='/login'>Login</a></small>
                <div>
                    <hr/>
                    <a href="/">Home</a>
                </div>
            </div>
        </form>
    )
};
