import { LoginForm } from "../../components/reusable/Fill_Form";


const LoginAdmin = () => {

    function onsubmit(){
        console.log('User logging in as admin')
    }
    return (
        <div>
            <LoginForm onsubmit={onsubmit} />
        </div>
    )
}