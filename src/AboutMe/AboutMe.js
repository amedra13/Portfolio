import React from 'react';
import LazyLoad from 'react-lazyload';
import Grid from '@material-ui/core/Grid';
import PersonImage from '../images/person-placeholder.jpg';
import ReactLogo from '../images/react_logo.png';
import ReduxLogo from '../images/redux_logo.png';
import ReactRouterLogo from '../images/reactRouter_logo.png';
import RestApiLogo from '../images/restApi_logo.png';
import MaterialUILogo from '../images/materialUI_logo.png';

import './AboutMe.css';

const AboutMe = () => {
	return (
		<div id="About" className="aboutMe">
			<LazyLoad height={500} once offset={100}>
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
							<p>Hello my name is</p>
							<h2>Andres Medrano</h2>
							<p>
								I'm a full-stack developer specialised in frontend and backend
								development for complex scalable web apps. I write about web
								development on my blog and regularly speak at various web
								conferences and meetups. Want to know how I may help your
								project? Check out my project case studies and resume.
							</p>
						</div>
					</Grid>
					<Grid item xs={12}>
						<div className="skills_container">
							<h2>Experience with...</h2>
							<img style={{ animationDelay: '800ms' }} src={ReactLogo} alt="" />
							<img style={{ animationDelay: '900ms' }} src={ReduxLogo} alt="" />
							<img
								style={{ animationDelay: '1000ms' }}
								src={ReactRouterLogo}
								alt=""
							/>
							<img
								style={{ animationDelay: '1100ms' }}
								src={RestApiLogo}
								alt=""
							/>
							<img
								style={{ animationDelay: '1200ms' }}
								src={MaterialUILogo}
								alt=""
							/>
							<a href="#Contact">Need a Developer?</a>
						</div>
					</Grid>
				</Grid>
			</LazyLoad>
		</div>
	);
};

export default AboutMe;
