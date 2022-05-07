import React from 'react'
import { Avatar, Typography, Button,TextField} from '@mui/material';

export const ShowCv = ({user, projects}) => {

  const [edit, setEdit] = React.useState(null)

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
        <Typography>Projects <Button onClick={e => {
          if (!edit) setEdit('project-add')
          else {
            setEdit(null)
          }
        }}>{edit ? 'Submit' : 'add'}</Button></Typography>
        {edit==='project-add' && <ProjectAdd />}
        {projects?.length < 1 ? 'No Projects to show' : (
          <div>
            {projects[0]?.description}
            </div>
        )}
      </div>

    </div>
  )
}

const ProjectAdd = () => {
  return (
    <div style={{width:'85%'}} >
      <TextField style={{marginTop:'10px'}} label='Title' id='title' variant='outlined' fullWidth />
      <TextField style={{ marginTop: '10px' }} label='Project Brief' id='description' variant='outlined' fullWidth multiline minRows={3} maxRows={4} />
      Project Completed:
      <input style={{ marginTop: '10px' }} type='checkbox' id='completed' />
      <div>
      </div>
    </div>
  )
}
