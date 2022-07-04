import React from 'react'

export const ShowCv = ({user, projects}) => {

  //show thumbnails of projects upto three projects; 
  return (
    <div align='center'>
      <div className='profile-pic'>
        <img src={user.profile_pic} alt='ppic' />
      </div>
      <div className='cv-show'>
        <h3>{user.fname} {user.lname}</h3>
      </div>
      <div className='cv-show'>
        <h3>About Me</h3>
        {user.about}
      </div>
      <div className='project-container'>
        {projects.length>1 && 
        <div>
          <h2 className='cv-show'>Some Cool Things I do...</h2>
        <div className='projects-in-brief'>
        {projects.map(p=>
        <div className='project-item'>
          <small>{p.title}</small>
          <img src={p.gallery[0]} alt='img' />
        </div>
        )}</div></div>
          }
      </div>
    </div>
  )
}