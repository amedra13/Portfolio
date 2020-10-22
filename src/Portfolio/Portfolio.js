import React from 'react';
import Nobu from './Projects/Nobu';
import Spotify from './Projects/Spotify';
import SportCards from './Projects/SportCards'
import Navbar from '../Navbar/Navbar';

import './Portfolio.css';

const Portfolio = () => {
	return (
		<div className="portfolio">
			<Navbar />
			<div className="portfolio__title">
				<h1>Portfolio</h1>
				<h5>
					Take a look at the projects I have worked on and participating in
				</h5>
			</div>
			<div className="portfolio__projects">
				<Nobu />
				<Spotify />
				<SportCards/>
			</div>
		</div>
	);
};

export default Portfolio;
