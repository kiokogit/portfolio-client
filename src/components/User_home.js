import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { add_project_action, current_user_profile_action, editcv, logout_action, user_projects_action } from '../actions/user_actions'
import { reset_search_data } from '../actions/actions_for_all';
import { GuestProfile} from './Guest_Profile';
import { ProfileHeader } from './ProfileHeader';
import { ProfileEditingForm } from './Profile_Editing';
import { Footer } from './reusable/Footer';
import { SearchHeader} from './reusable/Header';
import { ShowcaseProjects } from './ShowcaseProjects';
import { ShowCv } from './ShowCv';

import './userhome.css';
import { ProjectAddForm } from './Project_add_form';

export const UserHome = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [win, setWin] = useState('cv')
	const [user, setUser] = useState(null)
  
	//auto in
	useEffect(() => {
		dispatch(current_user_profile_action()); //to control if token is expired etc
	}, [dispatch])

	useEffect(() => {
		dispatch(user_projects_action());
	}, [dispatch]);

	function logout_user(e) {
		e.preventDefault();
		logout_action(navigate); //navigate from the action
	};

	function reset_data(e){
		e.preventDefault();
		dispatch(reset_search_data())
	}

	function handleEditing(e, body){
		dispatch(editcv(body));
		setWin('cv')
	}

	function add_project(e, project){
		add_project_action(project);
		dispatch(user_projects_action());
		setWin('cv')
	}

	//states
	const current_user = useSelector(state => state.user_profile);
	const searched_profiles = useSelector(state => state.guest_profile);

	//Projects
	const user_projects = useSelector(state => state.user_projects);
	const users = searched_profiles

	return (
		<div>
			<div>
				<ProfileHeader user={current_user} logout={(e) => logout_user(e)} setWin={setWin}  />
			</div>

			<div style={{ display: 'grid', gridTemplateColumns: '1fr 5fr 2fr', minHeight:'550px'}} >
				<div>
					<div style={{display:'flex', flexDirection:'row'}}>
				<SearchHeader />
				<button onClick={(e)=>{
					document.getElementById('search').value=''
					setWin('cv')
					reset_data(e)
				}} >Reset</button>
					</div>
				{users?.length < 1 ? '' : <div>
        <p>{users.length} profile(s) matched</p>
        <hr/>
        {users?.map(user => (
          <div id='searchedItem' onClick={e => {
            setUser(user)
            setWin('guest')
            document.getElementById('search').value = user.fname + ' ' + user.lname
          }}><div>{user.fname} {user.lname}</div>
            <small>{user.username}</small>
          </div>
        ))}
      </div> }
				</div>
				<div>
					{win === 'projects' && <ShowcaseProjects projects={user_projects} />}
					{win==='project-add' && <ProjectAddForm add_project={add_project} />}
					{win === 'edit' && <ProfileEditingForm user={current_user} handleEditing={handleEditing} />}
					{win === 'cv' && <ShowCv user={current_user} projects={user_projects} />}
					{win==='guest' && <GuestProfile user={user} projects={[]} />}
				</div>
				<div></div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};
