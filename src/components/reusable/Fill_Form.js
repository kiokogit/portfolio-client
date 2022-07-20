import React from 'react'

import './dialogs.css';

export const LoginForm = ({ onsubmit }) => {
    return (
        
            <div className='content pad form' >
                
                <header className='center' >
                    <h4>Login</h4>
                </header>
                <form  onSubmit={onsubmit}>
                <div>
                <div>
                    <div><label>Email/Username</label></div>
                    <input className='input fullwidth' required id='email_username' placeholder='Email/Username' type='text' />
                    <div><label>Password</label></div>
                    <input className='input fullwidth' required id='password' placeholder='Password' type='password' />
                </div>
                <div>
                    <p></p>
                    <button className='cancelbtn' type='reset'>Clear</button>
                    <button className='fwrdbtn' type='submit' >Submit</button>
                </div>
                </div>
                </form>
                <p></p>
                <p></p>
                <div className='margin-top'>
                    <small>OR</small>
                </div>
                <div className='margin-top' >
                    <small>Do not have an account yet? </small>
                    <button className='linkbtn fullwidth padding' onClick={()=>window.location.href='/register'}>Register</button>
                    </div>
                <div>
                    <hr/>
                    <a href="/">Home</a>
                </div>
            </div>
    )
};

export const RegistrationForm = ({ onsubmit }) => {
    return (
        
            <div className='content pad form'>
                <header>
                    <h4>Register as a New User</h4>
                </header>
                <form onSubmit={onsubmit} >
                <div>
                <div >
                    <div></div>
                    <div>First Name</div>
                    <input  className='fullwidth' id='fname' placeholder='First Name' variant='outlined' required fullWidth />
                    <div>Last Name</div>
                    <input  className='fullwidth' id='lname' placeholder='Last Name' variant='outlined' required fullWidth />
                    <div>Username</div>
                    <input  className='fullwidth' id='username' placeholder='User Name' variant='outlined' required fullWidth />
                    <div>Email</div>
                    <input  className='fullwidth' id='email' placeholder='Email' type='email' variant='outlined' required fullWidth />
                    <div>Password</div>
                    <input  className='fullwidth' id='password1' placeholder='Password' type='password' variant='outlined' required fullWidth />
                    <div>Confirm Password</div>
                    <input className='fullwidth' id='password2' placeholder='Confirm Password' type='password' variant='outlined' required  />
                </div>
                <p></p>
                <p></p>
                <div>
                    <button className='cancelbtn' type='reset' variant='outlined' >Clear</button>
                    <button className='fwrdbtn' type='submit' variant='outlined' >Submit</button>
                </div>
                </div>
                </form>
                <p></p>
                <p></p>
                <div className='margin-top'>
                    <small>OR</small>
                </div>
            <div className='margin-top'>
            <small>Already have an account? </small>
            <button className='linkbtn fullwidth padding' onClick={()=>window.location.href='/login'}>Login</button>
            </div>
                <div>
                    <hr/>
                    <a href="/">Home</a>
                </div>
            </div>
    )
};
