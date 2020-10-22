import React from 'react';
import Navbar from '../Navbar/Navbar';
import BubblesEffect from '../BubbleEffect/BubblesEffect';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import MouseOutlinedIcon from '@material-ui/icons/MouseOutlined';

import './MainPage.css';

const MainPage = () => {
	return (
		<div className="main">
			<Navbar />
			<div className="main__intro">
				<p>
					Hello, I am an aspiring Front End Developer located in the Bay Area
				</p>
				<p style={{ borderBottom: '3px solid white' }}>
					Welcome to my Portfolio!
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
				<div>
					<FacebookIcon className="main__icon" />
					<LinkedInIcon className="main__icon" />
					<TwitterIcon className="main__icon" />
				</div>
				<div>
					<MouseOutlinedIcon className="main__mouse" />
					<p>scroll</p>
				</div>
			</div>
			<BubblesEffect />
		</div>
	);
};

export default MainPage;
