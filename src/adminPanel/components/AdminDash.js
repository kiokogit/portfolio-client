
export const AdminLogin = ()=>{
    const users = fetch('localhost:5000/users/').data
    const projects = []
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