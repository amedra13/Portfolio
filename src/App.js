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
			<div id="home" className="app__main">
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
			<div id="about" className="app__aboutMe">
				{' '}
				about
			</div>
			<div id="portfolio" className="app__portfolio">
				portfolio
			</div>
			<div id="contact" className="app__contact">
				contact
			</div>
		</div>
	);
}

export default App;
