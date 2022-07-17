
export const AdminLogin = ()=>{
    const users = fetch('http://localhost:5000/users/').data
    return(
        <div>
            <table>
                <thead>
                    All Users
                </thead>
                <tbody>
                    {users.map(user =>
                        <tr>
                            {user.fname}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}