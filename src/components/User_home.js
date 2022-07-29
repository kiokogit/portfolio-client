import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { add_project_action, current_user_profile_action, editcv, edit_project_action, get_one_project_details_action, logout_action,  user_projects_action,  user_projects_in_brief_action } from '../actions/user_actions'
import { reset_search_data } from '../actions/actions_for_all';
import { GuestProfile} from './Guest_Profile';
import { ProfileHeader } from './ProfileHeader';
import { ProfileEditingForm } from './Profile_Editing';
import { Footer } from './reusable/Footer';
import { SearchHeader} from './reusable/Header';
import { ShowcaseProjects } from './ShowcaseProjects';
import { ShowCv } from './ShowCv';
import {AlertBox} from './reusable/Alert'

import './userhome.css';
import { ProjectAddForm } from './Project_add_form';
import { Loading } from './reusable/Loading_Progress';

export const UserHome = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [win, setWin] = useState('cv')
	const [user, setUser] = useState(null)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(null)
	const [selected, setSelected] = useState(false)
	const [showmore, setShowmore] = useState(false)
	const [loading, setLoading] = useState(false)


	//auto in
	useEffect(() => {
		dispatch(current_user_profile_action()); 
	}, [dispatch, success]) //reload whenever a successful edit to server is executed

	useEffect(() => {
		dispatch(user_projects_in_brief_action());
	}, [dispatch, success]);//reload whenever a successful edit to server is executed

	async function logout_user(e) {
		e.preventDefault();
		setLoading('Logging out user...')
		try{

			await logout_action(navigate); //navigate from the action
		} catch(e){

		}
		setLoading(false)
	};

	function reset_data(e){
		e.preventDefault();
		document.getElementById('search').value=''
		dispatch(reset_search_data())
		setWin('cv')
	}

	async function handleEditing(e, body){
		e.preventDefault()
		setLoading('Saving profile changes...')
		try{
			const edited = await editcv(body, setError, setSuccess);
			if(edited){
				setWin('cv')
			}
		}catch(e){

		}
		setLoading(false)
	}

	async function add_project(e, project){
		e.preventDefault()
		setLoading('Saving new project...')
		try{

			const added = await add_project_action(project, setError, setSuccess);
			if(added) {
				setWin('cv')
			}
		}catch(e){

		}
		setLoading(false)
	}

	async function get_one_project_details(id){
		setLoading('Fetching...')
		try{

			await dispatch(get_one_project_details_action(id))
			setSelected(true)
		}catch(e){

		}
		setLoading(false)
	}

	//get all projects to limit n
	async function get_all_user_projects(e){
		e.preventDefault()
		setLoading('Fetching...')
		try{
			dispatch(user_projects_action())
		}catch(e){

		}
		setLoading(false)
	}

	//edit project details
	async function edit_project(e, project){
		e.preventDefault()
		setLoading('Saving...')
		try{

			const edited = await edit_project_action(project, setError, setSuccess)
			if(edited){
				setWin('cv')
				setSelected(false)
				setShowmore(false)
			}
		}catch(e){

		}
		setLoading(false)
	}

	//states
	const current_user = useSelector(state => state.user_profile);
	const searched_profiles = useSelector(state => state.guest_profile);

	//Projects
	const user_projects = useSelector(state => state.user_projects);
	const project_details = useSelector(state=> state.project_details);
	const projects_brief = useSelector(state=> state.user_projects_brief)
	const users = searched_profiles

	return (
		<div>
			<div className='alertsspace'>
				<ProfileHeader user={current_user} logout={(e) => logout_user(e)} setWin={setWin}  />
				{error && <AlertBox severity={'error'} message={error} setError={setError} setSuccess={setSuccess}/>}
				{success && <AlertBox severity={'success'} message={success} setSuccess={setSuccess} setError={setError}
				/>}
				{loading && <Loading loading={loading}/>}
			</div>

			<div style={{ display: 'grid', gridTemplateColumns: '0.5fr 4fr 2fr', minHeight:'550px'}} >
				<div>
					<div>
						<SearchHeader reset_data={reset_data} />
					</div>
				{users?.length < 1 ? '' : <div className='search-results-floating padding'>
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
				<div className='scroll-container'>
					{win === 'projects' && <ShowcaseProjects projects={user_projects} />}
					{win==='project-add' && <ProjectAddForm add_project={add_project} setWin={setWin} projectDetails={{}} />}
					{win === 'edit' && <ProfileEditingForm user={current_user} handleEditing={handleEditing} />}
					{win === 'cv' && <ShowCv user={current_user} projects={projects_brief} getDetails={get_one_project_details} setShowmore={setShowmore} get_all_user_projects={get_all_user_projects} />}
					{win==='guest' && <GuestProfile user={user} projects={[]} />}
					{win==='project-edit' && <ProjectAddForm add_project={add_project} setWin={setWin} projectDetails={project_details} edit_project={edit_project} />}
				</div>
				<div>
		  			{selected && (
						<div className='project-details'>
							<div className='rowflex'>
								<button className='cancelbtn' onClick={() => setSelected(false)} >Close</button>
								<button className='fwrdbtn' onClick={(e)=>{
									e.preventDefault()
									setWin('project-edit')
								}}>Edit</button>
							</div>
							<h3>{project_details.title} </h3>
							<img src={project_details.gallery[0]} alt='img' />
							<p>{project_details.description}</p>
						</div>
					)}
					{showmore && (
						<div><button className='cancelbtn' onClick={() => setShowmore(false)} >Close Projects ({user_projects.length})</button>
						<div className='flexcolumn scroll-container padding'> 
							{user_projects.map(project => (
								<div className='project-item' onClick={()=>get_one_project_details(project._id)}>
									<h3>{project.title}</h3>
									<div>
										<img src={project.gallery[0]} alt='img' />
									</div>
									<small>{project.description}</small>
								</div>
							))}
						</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
