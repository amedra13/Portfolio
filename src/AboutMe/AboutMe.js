import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PersonImage from '../images/person-placeholder.jpg';
import ReactLogo from '../images/react_logo.png';
import ReduxLogo from '../images/redux_logo.png';
import ReactRouterLogo from '../images/reactRouter_logo.png';
import RestApiLogo from '../images/restApi_logo.png';
import MaterialUILogo from '../images/materialUI_logo.png';
import FirebaseLogo from '../images/firebase_logo.jpg';

import './AboutMe.css';

const AboutMe = () => {
	return (
		<div id="About" className="aboutMe">
			<Grid className="aboutMe__Container" container>
				<Grid item xs={12} md={6}>
					<div className="aboutMe__imageContainer">
						<img className="aboutMe__image" src={PersonImage} alt="Andres" />
					</div>
				</Grid>
				<Grid item xs={12} md={6}>
					<div className="aboutMe__gridItem">
						<p>Hello my name is</p>
						<h1>Andres Medrano</h1>
						<p>
							I'm a full-stack developer specialised in frontend and backend
							development for complex scalable web apps. I write about web
							development on my blog and regularly speak at various web
							conferences and meetups. Want to know how I may help your project?
							Check out my project case studies and resume.
						</p>
						<h1>Experience with...</h1>
						<div>
							<img src={ReactLogo} alt="" />
							<img src={ReduxLogo} alt="" />
							<img src={ReactRouterLogo} alt="" />
							<img src={RestApiLogo} alt="" />
							<img src={MaterialUILogo} alt="" />
							<img src={FirebaseLogo} alt="" />
						</div>
						<Button variant="outlined" fullWidth>
							<a href="#Contact">Hire Me</a>
						</Button>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default AboutMe;
