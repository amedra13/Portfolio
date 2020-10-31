import React from 'react';
import AndresLogo from '../images/A.png';
import './Navbar.css';

const Navbar = () => {
	return (
		<div className="navbar">
			<img src={AndresLogo} alt="" />
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
