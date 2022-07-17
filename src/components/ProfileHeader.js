import React from 'react'
import './home.css'

export const ProfileHeader = ({ user, logout, setWin}) => {
    return (
        <div>
        <div align="center" className='rowflex'>
            <div>
                <div>
                    <div>
                        <img className='accountpic' src={user.profile_pic} alt='ppic'/>
                    </div>
                        <small>{user.username}</small>
                </div>
                
            </div>
            <div>
                <h4> {user.fname} {user.lname}</h4>
            </div>
            <div>
                <button className='fwrdbtn' onClick={()=>setWin('project-add')}>Add A Project</button>
                <button className='' onClick={()=>setWin('edit')} >Edit Profile</button>
                <button className='cancelbtn' onClick={logout} >Logout</button>
            </div>
        </div>
        <hr/>
    </div>
    )
};
