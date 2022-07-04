import React from 'react'

import './userhome.css'

export const GuestProfile = ({user, projects=[]}) => {

  return (
    <div align='center'>
      <h3>{user.fname} {user.lname}</h3>
      <div>
        {user.about}
      </div>
      <div style={{ height: '400px', paddingTop: '100px' }}>
        {projects?.length > 1 && (
          <div>
            {projects[0]?.description}
            </div>
        )}
      </div>
    </div>
  )
}

