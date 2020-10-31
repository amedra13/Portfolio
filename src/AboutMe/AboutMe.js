import React from 'react';
import LazyLoad from 'react-lazyload';
import Grid from '@material-ui/core/Grid';
import PersonImage from '../images/person-placeholder.jpg';
import ReactLogo from '../images/react_logo.png';
import ReduxLogo from '../images/redux_logo.png';
import ReactRouterLogo from '../images/reactRouter_logo.png';
import RestApiLogo from '../images/restApi_logo.png';
import FirebaseLogo from '../images/firebase_logo.jpg';
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
						<p>
							{' '}
							<span role="img" aria-label="pin">
								📍
							</span>{' '}
							Redwood City, CA
						</p>
						<div>
							<h1>Interests:</h1>
							<p>Sport Cards</p>
							<p>Coffee</p>
							<p>Recreational Basketball</p>
							<p>Video Games</p>
						</div>
					</Grid>
					<Grid className="aboutMe__gridRight" item xs={12} md={6}>
						<div>
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
							<h1>Experience with...</h1>
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
								src={FirebaseLogo}
								alt=""
							/>
							<img
								style={{ animationDelay: '1300ms' }}
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
