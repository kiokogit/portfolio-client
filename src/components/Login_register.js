import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { login_action, register_action } from "../actions/user_actions.js";
import { AlertBox } from './reusable/Alert.js';
import { LoginForm, RegistrationForm } from './reusable/Fill_Form.js';
import { Footer } from './reusable/Footer.js';
import { Header } from './reusable/Header.js';


export const LoginRegister = ({ mode }) => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null)
    const navigate = useNavigate();

    async function register_user(e) {
        setError(null)
        e.preventDefault();
        const form = e.target
        const user = {
            fname: form.fname.value,
            lname: form.lname.value,
            email: form.email.value,
            password: form.password1.value
        }
        if (form.password1.value === form.password2.value) {
            const res = await register_action(user, setError, setSuccess);
            if (res) {
                setTimeout(() => {
                    navigate('/login', { replace: true });
                }, 2000);
            }
        } else {
            setError('Passwords must match');
        }
    }

    async function login_user(e) {
        setError(null)
        e.preventDefault();
        const user = { email: e.target.email.value, password: e.target.password.value }
        const res = await login_action(user, setError)
        if (!error && res) {
            navigate('/user', { replace: true })
        }
    }

    return (
        <div>
            <Header loggedin={false} login='/login' register='/register' />
            {error && <AlertBox severity='error' message={error} />}
            {success && <AlertBox severity='success' message={success} />}
            <div>
                {mode === 'reg' && <RegistrationForm onsubmit={(e) => register_user(e)} />}
                {mode === 'login' && <LoginForm onsubmit={(e) => login_user(e)} />}
            </div>
            <Footer />
        </div>
    )
};