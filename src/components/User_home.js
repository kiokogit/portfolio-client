import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { current_user_profile_action, logout_action, user_projects_action } from '../actions/user_actions'
import { GuestProfile, Search} from './Guest_Profile';
import { ProfileEditingForm } from './Profile_Editing';
import { Footer } from './reusable/Footer';
import { Header } from './reusable/Header';
import { ShowcaseProjects } from './ShowcaseProjects';
import { ShowCv } from './ShowCv';

import './userhome.css';

export const UserHome = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [win, setWin] = useState('cv')
	const [searched, setSearched] = useState(false)
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

	//states
	const current_user = useSelector(state => state.user_profile);
	const searched_profiles = useSelector(state => state.guest_profile);

	//Projects
	const user_projects = useSelector(state => state.user_projects)

	return (
		<div  >
			<div>
				<Header loggedin={true} logout={(e) => logout_user(e)} setWindow={setWin} setSearched={setSearched} />
			</div>
			{searched && <Search users={searched_profiles} setWin={setWin} setUser={setUser} setSearched={setSearched} />}

			<div style={{color:'white', display: 'grid', gridTemplateColumns: '1fr 5fr 2fr', minHeight:'550px'}} >
				<div>
					<h2>{current_user.username}</h2>
					<hr/>
					<div>
						<h5>Social Media</h5>
						<hr />
						<p><a href={current_user.gitHub} >GitHub</a></p>
						<p><a href={current_user.facebook} >Facebook</a></p>
						<p><a href={current_user.twitter} >Twitter</a></p>
						<p><a href={current_user.linkedIn} >LinkedIn</a></p>
						<p><a href={current_user.instagram} >Instagram</a></p>
					</div>
					<hr/>
				</div>
				<div>
					{/* <ButtonGroup>
						<Button onClick={()=>setWin('projects')} >Projects</Button>
						<Button onClick={()=>setWin('cv')} >Show User Details</Button>
						<Button onClick={()=>setWin('edit')} >Edit Profile</Button>
					</ButtonGroup> */}
					{win === 'projects' && <ShowcaseProjects projects={user_projects} />}
					{win === 'edit' && <ProfileEditingForm user={current_user} />}
					{win === 'cv' && <ShowCv user={current_user} projects={user_projects} />}
					{win==='guest' && <GuestProfile user={user} projects={[]} />}
				</div>
				<div>
					<div>
						<h3>Contacts</h3>
						<hr/>
						<h5>Email Address: {current_user.email}</h5>
						<h5>Phone No: {current_user.phone_number}</h5>
					</div>
					<div>
						<hr/>
						<h4>Other Profiles</h4>
						<hr />
						{/* {all_users?.map(user =>
							<div key={user._id}>
								<a href={`${user.fname}/profile`}>
									@{user.fname}
								</a>
							</div>
						)} */}
					</div>
					<hr/>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};
