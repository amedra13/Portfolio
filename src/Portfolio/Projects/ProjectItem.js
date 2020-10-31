import React from 'react';
import Grid from '@material-ui/core/Grid';
import TiltedImage from '../../TiltEffect/TiltEffect';
import './ProjectItem.css';

const ProjectItem = ({ project }) => {
	return (
		<div className="projectItem">
			<Grid
				container
				className="projectItem__grid"
				direction={project.reverse ? 'row-reverse' : 'row'}
			>
				<Grid
					className={`projectItem__gridItem ${
						project.reverse ? 'slideRight' : 'slideLeft'
					}`}
					item
					xs={12}
					md={6}
				>
					<h1>{project.name}</h1>
					<TiltedImage image={project.image} />
					<a href={project.website} target="_blank" rel="noopener noreferrer">
						Visit Website
					</a>
				</Grid>
				<Grid
					className={`projectItem__gridItem  ${
						project.reverse ? 'slideLeft' : 'slideRight'
					}`}
					item
					xs={12}
					md={6}
				>
					<div className="projectItem__right">
						<h1>{project.completed ? 'Functionality' : 'Expected Behavior'}</h1>
						<p>{project.functionality}</p>
						<h1>Tools Used</h1>
						<ul>
							{project.tools.map((tool) => (
								<li>{tool}</li>
							))}
						</ul>
						<h1>{project.completed ? 'Limitations' : 'Benefits'}</h1>
						<ul>
							{project.limitations.map((limit) => (
								<li>{limit}</li>
							))}
						</ul>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default ProjectItem;
