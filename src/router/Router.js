import {Routes, BrowserRouter as Router, Route} from 'react-router-dom'
import { Home } from '../components/Home'
import { LoginRegister } from '../components/Login_register'
import { UserHome } from '../components/User_home'
import { Error } from '../components/reusable/Error'


export function AppRouter() {

    return (
        <Router>
            <Routes>
                <Route path='/register' element={<LoginRegister mode='reg' />} />
                <Route path='/login' element={<LoginRegister mode='login' />} />
                <Route path='/' element={<Home />} />
                <Route path='/user' element={<UserHome />} />
                <Route path='*' element={<Error code={404} />} />
            </Routes>
        </Router>
    )
}