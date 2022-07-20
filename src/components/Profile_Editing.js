import React, {useState} from 'react'
import FileBase64 from 'react-file-base64'

export const ProfileEditingForm = ({ user, handleEditing }) => {
  const [body, setBody] = useState(user)

  return (
      <div>
      <form className='editForm' onSubmit={(e)=>handleEditing(e, body)} >
        <div>
        <label>Profile Photo</label>
        <FileBase64 multiple={false} id='profile_pic' type='file' onDone={({base64})=>setBody({...body, profile_pic:base64})}  />
        </div>
        <div>
        <label>First Name</label>
        <input type='text' id='fname' label='First Name' value={body.fname} onChange={e=>setBody({...body, fname:e.target.value})}  />
        </div>
        <div><label>Last Name</label>
        <input type='text' id='lname' label='Last Name' value={body.lname} onChange={e=>setBody({...body, lname:e.target.value})}  /></div>
        <div><label>Phone Number</label>
        <input type='tel' id='phone_number' label='Phone Number' value={body.phone_number} onChange={e=>setBody({...body, phone_number:e.target.value})}  /></div>
        <div><label>National ID No</label>
        <input type='number' id='id_number' label='National ID No' value={body.id_number} onChange={e=>setBody({...body, id_number:e.target.value})}  /></div>
        <div><label>Gender</label>
        <select onSelect={e=>setBody({...body, gender:e.target.value})} defaultValue={user.gender}>
          <option value='Not specified' >--select gender--</option>
          <option value="Male" >Male</option>
          <option value="Female" >Female</option>
        </select></div>
        <div><label>Personal Pronouns</label>
        <input type='text' id='pronouns' label='Personal Pronouns' value={body.pronouns} onChange={e=>setBody({...body, pronouns:e.target.value})}  /></div>
        <div><label>Nationality</label>
        <input type='text' id='nationality' label='Nationality' value={body.nationality} onChange={e=>setBody({...body, nationality:e.target.value})}  /></div>
        <div><label>Religious Affiliation</label>
        <input type='text' id='religion' label='Religious Affiliation' value={body.religion} onChange={e=>setBody({...body, religion:e.target.value})}  /></div>
        <div><label>Marital Status</label>
        <input type='text' id='relationship_status' label='Marital Status' value={body.relationship_status} onChange={e=>setBody({...body, relationship_status:e.target.value})}  /></div>
        <div><label>Date of Birth</label>
        <input type='date' id='date_of_birth' label='Date of Birth' value={body.date_of_birth} onChange={e=>setBody({...body, date_of_birth:e.target.value})}  /></div>
        <div><label>About Me</label>
        <textarea type='text' id='about' label='About Me' value={body.about} onChange={e=>setBody({...body, about:e.target.value})} /></div>
        <div><label>Facebook Link</label>
        <input id='facebook' label='Facebook Link' value={body.facebook} onChange={e=>setBody({...body, facebook:e.target.value})}  /></div>
        <div><label>Twitter handle</label>
        <input id='twitter' label='Twitter Handle Link' value={body.twitter} onChange={e=>setBody({...body, twitter:e.target.value})}  /></div>
        <div><label>GitHub Profile Username</label>
        <input id='gitHub' label='GitHub Profile' value={body.gitHub} onChange={e=>setBody({...body, gitHub:e.target.value})}  /></div>
        <div><label>Would you like to submit the edited form?</label>
        <button className='cancelbtn' type='reset'>Cancel Changes</button> 
        <button className='fwrdbtn' type='submit' hidden={body===user? true:false} >Submit Changes</button> 
        </div>
          </form>
    </div>
  )
}
