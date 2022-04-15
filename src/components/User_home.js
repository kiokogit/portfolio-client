import { Paper } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { all_profiles_actions} from '../actions/actions_for_all';
import { current_user_profile_action, logout_action } from '../actions/user_actions'
import { Footer } from './reusable/Footer';
import { Header } from './reusable/Header';

import './user-home.css';

export const UserHome = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
  
	//auto in
	useEffect(() => {
		dispatch(current_user_profile_action()); //to control if token is expired etc
	}, [dispatch])

	useEffect(() => {
		dispatch(all_profiles_actions());
	}, [dispatch]);

	function logout_user(e) {
		e.preventDefault();
		if (logout_action(navigate)); //navigate from the action
	};

	//states
	const current_user = useSelector(state => state.user_profile);
	const all_users = useSelector(state => state.users);

	return (
		<div className='all-content' >
			<div>
				<Header loggedin={true} logout={(e) => logout_user(e)} />
			</div>
			<div className='main-content' >
				<div>
					User Details
					<h3>@{current_user.fname}</h3>
					<div>Social Media handles</div>
					{current_user.facebook}
				</div>
				<div>
					Feed
				</div>
				<div>
					Users:
					<div>
						{all_users?.map(user =>
							<div key={user._id}>
								<Paper>
									@{user.fname} - {user.email}
								</Paper>
							</div>
						)}
					</div>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};
