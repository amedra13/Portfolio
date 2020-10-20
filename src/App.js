import React from 'react';
import Navbar from './Navbar';
import BubblesEffect from './BubblesEffect';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import './App.css';

function App() {
	return (
		<div className="app">
			<div className="app__main">
				<Navbar />
				<div className="app__info">
					<div className="app__title">
						<p>Welcome to my Portfolio</p>
						<p>
							I am an aspiriing web developer with an interest in all things
							React.js
						</p>
					</div>
					<div className="app__name">
						<p>Andres Medrano</p>
					</div>
					<div className="app__socialMedia">
						<FacebookIcon />
						<LinkedInIcon />
						<TwitterIcon />
					</div>
				</div>
				<BubblesEffect />
			</div>
			<div className="app__aboutMe"></div>
			<div className="app__portfolio"></div>
		</div>
	);
}

export default App;
