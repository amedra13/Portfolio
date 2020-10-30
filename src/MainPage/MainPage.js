import React from 'react';
import Navbar from '../Navbar/Navbar';
import MouseOutlinedIcon from '@material-ui/icons/MouseOutlined';
import './MainPage.css';

const MainPage = () => {
	return (
		<div id="Home" className="main">
			<Navbar />
			<div className="main__title">
				<div>
					<p>Andres</p>
					<p>Medrano</p>
				</div>
				<p>
					I am an aspiring Front End Developer with an interest in all things
					React.js
				</p>
			</div>
			<MouseOutlinedIcon className="mouse_icon" fontSize="large" />
		</div>
	);
};

export default MainPage;
