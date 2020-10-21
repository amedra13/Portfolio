import React from 'react';
import FontDownloadOutlinedIcon from '@material-ui/icons/FontDownloadOutlined';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="navbar">
			<FontDownloadOutlinedIcon fontSize="large" />
			<div className="navbar__links">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/portfolio">Portfolio</Link>
				<Link to="/contact"> Contact </Link>
			</div>
		</div>
	);
};

export default Navbar;
