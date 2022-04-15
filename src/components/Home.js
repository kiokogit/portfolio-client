import React from 'react'
import { Footer } from './reusable/Footer.js'
import { Header } from './reusable/Header.js'

export const Home = () => {
	return (
		<div>
			<div>
				<Header loggedin={false} login='/login' register='/register' />
			</div>
			<div>
				Home
			</div>
			<div >
				<Footer />
			</div>
		</div>
	)
};
