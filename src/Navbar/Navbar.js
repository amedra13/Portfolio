import React from 'react';
import FontDownloadOutlinedIcon from '@material-ui/icons/FontDownloadOutlined';
import './Navbar.css';

const Navbar = () => {
	return (
		<div className="navbar">
			<a href="#Home">
				<FontDownloadOutlinedIcon fontSize="large" />
			</a>
			<div className="navbar__links">
				<a href="#Home">Home</a>
				<a href="#About">About</a>
				<a href="#Portfolio">Portfolio</a>
				<a href="#Contact"> Contact </a>
			</div>
		</div>
	);
};

export default Navbar;
