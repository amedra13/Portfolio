import React from 'react';
import Nobu from './Projects/Nobu';
import Spotify from './Projects/Spotify';
import SportCards from './Projects/SportCards';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import MouseOutlinedIcon from '@material-ui/icons/MouseOutlined';
import LazyLoad from 'react-lazyload';
import './Portfolio.css';

const Portfolio = () => {
	return (
		<div className="portfolio">
			<Navbar />
			<div className="portfolio__title">
				<h1>Portfolio</h1>
				<p>Take a look at the projects I have worked on and participating in</p>
				<div>
					<MouseOutlinedIcon className="mouse__icon" fontSize="large" />
					<p>scroll</p>
				</div>
			</div>
			<div className="portfolio__projects">
				<LazyLoad height={300} once={true} offset={-200}>
					<Nobu />
				</LazyLoad>
				<LazyLoad height={300} once={true} offset={-200}>
					<Spotify />
				</LazyLoad>
				<LazyLoad height={300} once={true} offset={-200}>
					<SportCards />
				</LazyLoad>
			</div>
			<Footer />
		</div>
	);
};

export default Portfolio;
