import React from 'react';
import FontDownloadOutlinedIcon from '@material-ui/icons/FontDownloadOutlined';
import './Navbar.css';

const Navbar = () => {
	return (
		<div className="navbar">
			<FontDownloadOutlinedIcon fontSize="large" />
			<div className="navbar__links">
				<a href="/">Home</a>
				<a href="#about">About</a>
				<a href="#portfolio">Portfolio</a>
				<a href="#contact">Contact</a>
			</div>
		</div>
	);
};

export default Navbar;
