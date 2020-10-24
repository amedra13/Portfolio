import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PersonImage from '../images/person-placeholder.jpg';
import './AboutMe.css';

const AboutMe = () => {
	return (
		<div id="About" className="aboutMe">
			<div className="aboutMe__header">
				<Grid className="aboutMe__headerContainer" container>
					<Grid item xs={12} md={3}>
						<div className="aboutMe__imageContainer">
							<img className="aboutMe__image" src={PersonImage} alt="Andres" />
						</div>
					</Grid>
					<Grid item xs={12} md={9}>
						<div className="aboutMe__gridItem">
							<p>Hello my name is</p>
							<h1>Andres Medrano</h1>
							<p>
								I'm a full-stack developer specialised in frontend and backend
								development for complex scalable web apps. I write about web
								development on my blog and regularly speak at various web
								conferences and meetups. Want to know how I may help your
								project? Check out my project case studies and resume.
							</p>
							<Button variant="outlined">Hire Me</Button>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default AboutMe;
