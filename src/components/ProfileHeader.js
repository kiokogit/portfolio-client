import React from 'react'
import './home.css'

export const ProfileHeader = ({ user, logout, setWin}) => {
    return (
        <div>
        <div align="center" className='profile-header'>
            <div className='hover-enlarge'>
                <div id='ppic' >
                    <img src={user.profile_pic} alt='ppic' />
                    <h4>{user.username}</h4>
                    <button onClick={logout} >Logout</button>
                    <button onClick={()=>setWin('edit')} >Edit Profile</button>
                    <div>
                        <button onClick={()=>setWin('project-add')}>Add A Project</button>
                    </div>
                </div>
            </div>
            <h2>{user.fname} {user.lname}</h2>
            <div className='hover-enlarge'>
                <h5>Email Address: {user.email}</h5>
                {user.phone_number && <h5>Phone No: {user.phone_number}</h5>}
            </div>
            {user.github || user.facebook ||user.twitter || user.linkedIn || user.instagram ?
            <div className='hover-enlarge'>
                {user.gitHub && <p><a href={user.gitHub} >GitHub</a></p>}
                {user.facebook && <p><a href={user.facebook} >Facebook</a></p>}
                {user.twitter && <p><a href={user.twitter} >Twitter</a></p>}
                {user.linkedIn && <p><a href={user.linkedIn} >LinkedIn</a></p>}
                {user.instagram && <p><a href={user.instagram} >Instagram</a></p>}	
            </div>:''}
        </div>
        <hr/>
    </div>
    )
};
