import React, {useState} from 'react'
import FileBase64 from 'react-file-base64'

export const ProfileEditingForm = ({ user, handleEditing }) => {
  const [body, setBody] = useState({})

  return (
      <div>
      <form className='editForm' onSubmit={(e)=>handleEditing(e, body)} >
        <div>
        <label>Profile Photo</label>
        <FileBase64 multiple={false} id='profile_pic' type='file' onDone={({base64})=>setBody({...body, profile_pic:base64})}  />
        </div>
        <div>
        <label>First Name</label>
        <input type='text' id='fname' label='First Name' placeholder={user.fname} onChange={e=>setBody({...body, fname:e.target.value})}  />
        </div>
        <div><label>Last Name</label>
        <input type='text' id='lname' label='Last Name' placeholder={user.lname} onChange={e=>setBody({...body, lname:e.target.value})}  /></div>
        <div><label>Phone Number</label>
        <input type='tel' id='phone_number' label='Phone Number' placeholder={user.phone_number} onChange={e=>setBody({...body, phone_number:e.target.value})}  /></div>
        <div><label>National ID No</label>
        <input type='number' id='id_number' label='National ID No' placeholder={user.id_number} onChange={e=>setBody({...body, id_number:e.target.value})}  /></div>
        <div><label>Gender</label>
        <select onSelect={e=>setBody({...body, gender:e.target.value})} defaultValue={user.gender}>
          <option value="Male" >Male</option>
          <option value="Female" >Female</option>
        </select></div>
        <div><label>Personal Pronouns</label>
        <input type='text' id='pronouns' label='Personal Pronouns' placeholder={user.pronouns} onChange={e=>setBody({...body, pronouns:e.target.value})}  /></div>
        <div><label>Nationality</label>
        <input type='text' id='nationality' label='Nationality' placeholder={user.nationality} onChange={e=>setBody({...body, nationality:e.target.value})}  /></div>
        <div><label>Religious Affiliation</label>
        <input type='text' id='religion' label='Religious Affiliation' placeholder={user.religion} onChange={e=>setBody({...body, religion:e.target.value})}  /></div>
        <div><label>Marital Status</label>
        <input type='text' id='relationship_status' label='Marital Status' placeholder={user.relationship_status} onChange={e=>setBody({...body, relationship_status:e.target.value})}  /></div>
        <div><label>Date of Birth</label>
        <input type='date' id='date_of_birth' label='Date of Birth' placeholder={user.date_of_birth} onChange={e=>setBody({...body, date_of_birth:e.target.value})}  /></div>
        <div><label>About Me</label>
        <textarea type='text' id='about' label='About Me' placeholder={user.about} onChange={e=>setBody({...body, about:e.target.value})} /></div>
        <div><label>Facebook Link</label>
        <input id='facebook' label='Facebook Link' placeholder={user.facebook} onChange={e=>setBody({...body, facebook:e.target.value})}  /></div>
        <div><label>Twitter handle</label>
        <input id='twitter' label='Twitter Handle Link' placeholder={user.twitter} onChange={e=>setBody({...body, twitter:e.target.value})}  /></div>
        <div><label>GitHub Profile Username</label>
        <input id='gitHub' label='GitHub Profile' placeholder={user.gitHub} onChange={e=>setBody({...body, gitHub:e.target.value})}  /></div>
        <div><label>Would you like to submit the edited form?</label>
        <button type='submit'>Submit Changes</button> </div>
          </form>
    </div>
  )
}
