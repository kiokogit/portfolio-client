import {TextField } from '@mui/material'
import React, {useState} from 'react'
import {editcv} from '../actions/user_actions.js'

export const ProfileEditingForm = ({ user }) => {
  const [body, setBody] = useState({})
  const handleEditing = (e) => {
    editcv(body);
  }
  return (
      <div>
      <form onSubmit={(e)=>handleEditing(e)} style={{paddigLeft:'25px'}} >
        <TextField style={{marginTop:'10px', width:'80%'}} type='text' id='fname' label='First Name' placeholder={user.fname} onChange={e=>setBody({...body, fname:e.target.value})} fullWidth size='small' />
        <TextField style={{marginTop:'10px', width:'80%'}} type='text' id='lname' label='Last Name' placeholder={user.lname} onChange={e=>setBody({...body, lname:e.target.value})} fullWidth size='small' />
        <TextField style={{marginTop:'10px', width:'80%'}} type='number' id='id_number' label='National ID No' placeholder={user.id_number} onChange={e=>setBody({...body, id_number:e.target.value})} fullWidth size='small' />
        <TextField style={{marginTop:'10px', width:'80%'}} type='text' id='gender' label='Gender' placeholder={user.gender} onChange={e=>setBody({...body, gender:e.target.value})} fullWidth size='small' />
        <TextField style={{marginTop:'10px', width:'80%'}} type='text' id='pronouns' label='Personal Pronouns' placeholder={user.pronouns} onChange={e=>setBody({...body, pronouns:e.target.value})} fullWidth size='small' />
        <TextField style={{marginTop:'10px', width:'80%'}} type='text' id='nationality' label='Nationality' placeholder={user.nationality} onChange={e=>setBody({...body, nationality:e.target.value})} fullWidth size='small' />
        <TextField style={{marginTop:'10px', width:'80%'}} type='text' id='religion' label='Religious Affiliation' placeholder={user.religion} onChange={e=>setBody({...body, religion:e.target.value})} fullWidth size='small' />
        <TextField style={{marginTop:'10px', width:'80%'}} type='text' id='relationship_status' label='Marital Status' placeholder={user.relationship_status} onChange={e=>setBody({...body, relationship_status:e.target.value})} fullWidth size='small' />
        <TextField style={{marginTop:'10px', width:'80%'}} type='date' id='date_of_birth' label='Date of Birth' placeholder={user.date_of_birth} onChange={e=>setBody({...body, date_of_birth:e.target.value})} fullWidth size='small' />
        <TextField style={{marginTop:'10px', width:'80%'}} type='text' id='about' label='About Me' placeholder={user.about} onChange={e=>setBody({...body, about:e.target.value})} fullWidth size='small' />
        <TextField style={{marginTop:'10px', width:'80%'}} id='facebook' label='Facebook Link' placeholder={user.facebook} onChange={e=>setBody({...body, facebook:e.target.value})} fullWidth size='small' />
        <TextField style={{marginTop:'10px', width:'80%'}} id='twitter' label='Twitter Handle Link' placeholder={user.twitter} onChange={e=>setBody({...body, twitter:e.target.value})} fullWidth size='small' />
        <TextField style={{marginTop:'10px', width:'80%'}} id='gitHub' label='GitHub Profile' placeholder={user.gitHub} onChange={e=>setBody({...body, github:e.target.value})} fullWidth size='small' />
        <TextField style={{marginTop:'10px', width:'80%'}} type='submit' value='Submit Changes' fullWidth size='small' />
          </form>
    </div>
  )
}
