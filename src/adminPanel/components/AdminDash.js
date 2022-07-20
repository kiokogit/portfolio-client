
export const AdminLogin = async()=>{
    let users=['Smoke','Mwangi']

    return(
        <div>
            <table>
                <thead>
                    All Users
                </thead>
                <tbody>
                    {users.map(user =>
                        <tr>
                            {user}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}