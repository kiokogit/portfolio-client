import React from 'react'
import { Avatar} from '@mui/material';

import './userhome.css'

export const GuestProfile = ({user, projects=[]}) => {

  return (
    <div align='center'>
      <div>
        { user.profile_pic?<img src={user.profile_pic} alt='ppic' />:<Avatar/> }
      </div>
      <div>
        <h3>{user.fname} {user.lname}</h3>
      </div>
      <div>
        {user.about}
      </div>
      <div style={{ height: '400px', paddingTop: '100px' }}>
        {projects?.length < 1 && (
          <div>
            {projects[0]?.description}
            </div>
        )}
      </div>

    </div>
  )
}

export const Search = ({ users, setWin, setUser, setSearched}) => {

  return (
    <div style={{ backgroundColor:'GrayText',padding: '20px', marginLeft: '8%', width: '300px', maxHeight: '500px', color: 'white', display: 'inline-block', position: 'absolute' }}>
      {users?.length < 1 ? 'No Profile Match' : users?.map(user => (
        <div id='searchedItem' style={{padding:'5px',height:'2rem', cursor:'pointer'}} onClick={e => {
          setUser(user)
          setSearched(false)
          setWin('guest')
          document.getElementById('search').value=user.fname+' '+user.lname
        }}>{user.fname} {user.lname} </div>
      ))}
    </div>
  )
}
