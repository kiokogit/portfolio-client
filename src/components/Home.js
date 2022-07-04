import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { GuestProfile} from './Guest_Profile.js';
import { Footer } from './reusable/Footer.js'
import { GuestHeader, SearchHeader } from './reusable/Header.js'
import { ShowCv } from './ShowCv.js';

export const Home = () => {

	const [win, setWin] = useState('landing');
	const [user, setUser] = useState(null);

	const users = useSelector(state => state.guest_profile)

	return (
		<div>
			<GuestHeader />
			<div>
				<div>
				<SearchHeader  />
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
