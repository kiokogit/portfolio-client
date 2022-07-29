import React from 'react'

export const ShowCv = ({user, projects, getDetails, setShowmore, get_all_user_projects}) => {

  React.useEffect(()=>{
    document.title=`${user.fname}'s profile`
  }, [user])
  //show thumbnails of projects upto three projects; 
  return (
    <div align='left'>
      <div className='cv-show'>
        <h4>About Me</h4>
        <div  className='padding'>
        {user.about}
        </div>
      </div>
      <div className='project-container'>
        {projects.length>1 && 
        <div>
          <h4 className='cv-show'>Some Cool Things I've done...</h4>
        <div className='projects-in-brief padding'>
        {projects.map(p=>
        <div className='project-item'>
          <small>{p.title}</small>
          <div>
            <img src={p.gallery[0]} alt='img' onClick={()=>getDetails(p._id)}/>
          </div>
        </div>
        )}
          <button className='cancelbtn' onClick={(e)=>{
            get_all_user_projects(e)
            setShowmore(true)
            }} >view more... </button>
        </div>
        </div>
          }
      </div>
      <div>
        <h4>Hobbies</h4>
        <div  className='padding'>
            {user.hobbies}
        </div>
      </div>
      <div>
        <h4>Contacts</h4>
        <div  className='padding'>
          <p>Email Address: {user.email}</p>
          {user.phone_number && <p>Phone No: {user.phone_number}</p>}
        </div>
      </div>
      <div>
        <h4>Social</h4>
        <div className='padding'>
          {user.gitHub && <p ><a href={user.gitHub} >GitHub</a></p>}
          {user.facebook && <p><a href={user.facebook} >Facebook</a></p>}
          {user.twitter && <p><a href={user.twitter} >Twitter</a></p>}
          {user.linkedIn && <p><a href={user.linkedIn} >LinkedIn</a></p>}
          {user.instagram && <p><a href={user.instagram} >Instagram</a></p>}
        </div>
      </div>
    </div>
  )
}