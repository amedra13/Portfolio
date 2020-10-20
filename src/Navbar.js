import React from 'react';
import FontDownloadOutlinedIcon from '@material-ui/icons/FontDownloadOutlined';
import './Navbar.css';

const Navbar = () => {
	return (
		<div className="navbar">
			<FontDownloadOutlinedIcon fontSize="large" />
			<div className="navbar__links">
				<h2>Home</h2>
				<h2>About</h2>
				<h2>Portfolio</h2>
				<h2>Contact</h2>
			</div>
		</div>
	);
};

export default Navbar;
