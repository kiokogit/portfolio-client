import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { GuestProfile, Search } from './Guest_Profile.js';
import { Footer } from './reusable/Footer.js'
import { Header } from './reusable/Header.js'

export const Home = () => {

	const [win, setWin] = useState('landing');
	const [user, setUser] = useState(null);
	const [searched, setSearched] = useState(false);

	const searched_profiles = useSelector(state => state.guest_profile)

	return (
		<div style={{backgroundColor:'black'}}>
			<div  >
				<Header loggedin={false} login='/login' register='/register' setSearched={setSearched} setWindow={setWin} />
			</div>
			{searched && <Search users={searched_profiles} setWin={setWin} setUser={setUser} setSearched={setSearched} />}
			<div align='center' style={{ backgroundColor: 'black', color: 'white', minHeight: '700px' }} >
				<div>
					{win === 'landing' && <Landing />}
					{win === 'guest' && <GuestProfile user={user} />}
				</div>
			</div>
			<Footer />
		</div>
	)
};

const Landing = () => {
	return (
		<div>
			<div style={{ paddingTop: '350px', height: '1000px' }}>
				Hi there, Welcome to your best Portfolio site
			</div>
			<div style={{ paddingTop: '500px', backgroundColor: 'grey', height: '1000px' }} >
				And search for more colleagues here
			</div>
			<div style={{ paddingTop: '500px', backgroundColor: 'black', height: '1000px' }} >
				Get Noticed
			</div>
			<div style={{ paddingTop: '500px', backgroundColor: 'grey', height: '1000px' }}>
				Refer your employer to your work here
			</div>
		</div>
	)
};
