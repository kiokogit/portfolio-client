import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { reset_search_data } from '../actions/actions_for_all.js';
import { GuestProfile} from './Guest_Profile.js';
import { Footer } from './reusable/Footer.js'
import { GuestHeader, SearchHeader } from './reusable/Header.js'
import { ShowCv } from './ShowCv.js';

export const Home = () => {

	const dispatch = useDispatch
	const [win, setWin] = useState('landing');
	const [user, setUser] = useState(null);

	function reset_data(e){
		e.preventDefault();
		document.getElementById('search').value=''
		dispatch(reset_search_data())
		setWin('landing')
	}
	const users = useSelector(state => state.guest_profile)

	return (
		<div>
			<GuestHeader />
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
			<div align='center' style={{minHeight: '700px' }} >
				<div>
					{win === 'landing' && <Landing />}
					{win === 'guest' && <ShowCv user={user} />}
				</div>
			</div>
			<Footer />
		</div>
	)
};

const Landing = () => {
	return (
		<div>
			<div>
				Hi there, Welcome to your best Portfolio site
			</div>
			<div  >
				And search for more colleagues here
			</div>
			<div  >
				Get Noticed
			</div>
			<div >
				Refer your employer to your work here
			</div>
		</div>
	)
};
