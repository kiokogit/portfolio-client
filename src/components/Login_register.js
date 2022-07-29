import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { login_action, register_action } from "../actions/user_actions.js";
import { AlertBox } from './reusable/Alert.js';
import { LoginForm, RegistrationForm } from './reusable/Fill_Form.js';
import { Footer } from './reusable/Footer.js';
import { GuestHeader } from './reusable/Header.js';
import { Loading } from './reusable/Loading_Progress.js';

export const LoginRegister = ({ mode }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null)
    const navigate = useNavigate();

    //document title
    useEffect(()=>{
        document.title = `User ${mode} page`
    }, [mode])

    async function register_user(e) {
        setError(null)
        setLoading('Verifying details...')
        e.preventDefault();
        const form = e.target
        const user = {
            fname: form.fname.value,
            lname: form.lname.value,
            username: form.username.value,
            email: form.email.value,
            password: form.password1.value
        }
        if (form.password1.value === form.password2.value) {
            const res = await register_action(user, setError, setSuccess);
            if (res) {
                setTimeout(() => {
                    /* navigate('/login') */
                    const user = {username:form.username.value, password:form.password1.value}
                    login_user(e, user, true) //true represents first time login
                }, 500);
            }
        } else {
            setError('Passwords must match');
        }
        setLoading(false)
    }

    async function login_user(e, user=null, firstTime=false) {
        setError(null)
        setLoading('Logging in user...')
        e.preventDefault();
        if(!user) user = { username:e.target.email_username.value, email: e.target.email_username.value, password: e.target.password.value }
        await login_action(user,navigate, setError, firstTime)
        setLoading(false)
    }

    return (
        <div align='center'>
            <GuestHeader />
            <div style={{height:'50px'}}>
                {error && <AlertBox severity='error' message={error} setError={setError} setSuccess={setSuccess} />}
                {success && <AlertBox severity='success' message={success} setError={setError} setSuccess={setSuccess} />}
                {loading && <Loading loading={loading}/>}
            </div>
            <div style={{minHeight:'550px'}}>
                {mode === 'reg' && <RegistrationForm onsubmit={(e) => register_user(e)} />}
                {mode === 'login' && <LoginForm onsubmit={(e) => login_user(e)} />}
            </div>
            <Footer />
        </div>
    )
};
