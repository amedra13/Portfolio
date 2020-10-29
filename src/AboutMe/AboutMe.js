import React from 'react';
import LazyLoad from 'react-lazyload';
import Grid from '@material-ui/core/Grid';
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
				<Grid className="aboutMe__gridLeft" item xs={12} md={6}>
					<div className="aboutMe__imageContainer">
						<img src={PersonImage} alt="Andres" />
					</div>
					<h2>Interests:</h2>
					<p>Sports Cards</p>
					<p>Coding</p>
					<p>Eating</p>
					<p>VideoGames</p>
				</Grid>
				<Grid className="aboutMe__gridRight" item xs={12} md={6}>
					<div>
						<LazyLoad height={500} once={true} offset={-100}>
							<p>Hello my name is</p>
							<h1>Andres Medrano</h1>
							<p>
								I'm a full-stack developer specialised in frontend and backend
								development for complex scalable web apps. I write about web
								development on my blog and regularly speak at various web
								conferences and meetups. Want to know how I may help your
								project? Check out my project case studies and resume.
							</p>
						</LazyLoad>
					</div>
				</Grid>
				<Grid item xs={12}>
					<div className="skills_container">
						<h1>Experience with...</h1>
						<LazyLoad height={400} once={true} offset={-100}>
							<img
								style={{ animationDuration: '0.2s' }}
								src={ReactLogo}
								alt=""
							/>
							<img
								style={{ animationDuration: '0.4s' }}
								src={ReduxLogo}
								alt=""
							/>
							<img
								style={{ animationDuration: '0.6s' }}
								src={ReactRouterLogo}
								alt=""
							/>
							<img
								style={{ animationDuration: '0.8s' }}
								src={RestApiLogo}
								alt=""
							/>
							<img
								style={{ animationDuration: '1s' }}
								src={MaterialUILogo}
								alt=""
							/>
							<img
								style={{ animationDuration: '1.2s' }}
								src={FirebaseLogo}
								alt=""
							/>
						</LazyLoad>
					</div>
					<a className="hire_me" href="#Contact">
						Hire Me
					</a>
				</Grid>
			</Grid>
		</div>
	);
};

export default AboutMe;
