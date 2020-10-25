import React from 'react';
import Navbar from '../Navbar/Navbar';
import BubblesEffect from '../BubbleEffect/BubblesEffect';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

import './MainPage.css';
import { IconButton } from '@material-ui/core';

const MainPage = () => {
	return (
		<div id="Home" className="main">
			<Navbar />
			<div className="main__intro">
				<p>Hello, welcome to my Portfolio!</p>
				<p style={{ borderBottom: '3px solid white' }}>
					I am an aspiring Front End Developer with an interest in all things
					React.js
				</p>
			</div>
			<div className="main__title">
				<div>
					<p>Andres</p>
					<p>Medrano</p>
				</div>
				<i class="fas fa-laptop-code"></i>
			</div>
			<div className="main__footer">
				<IconButton
					target="_blank"
					href="https://www.facebook.com/andres.medrano.98"
				>
					<FacebookIcon fontSize="large" />
				</IconButton>
				<IconButton
					target="_blank"
					href="https://www.linkedin.com/in/andres-medrano-19ba91132/"
				>
					<LinkedInIcon fontSize="large" />
				</IconButton>
				<IconButton>
					<TwitterIcon fontSize="large" />
				</IconButton>
				<IconButton target="_blank" href="https://github.com/amedra13">
					<GitHubIcon fontSize="large" />
				</IconButton>
			</div>
			<BubblesEffect />
		</div>
	);
};

export default MainPage;
