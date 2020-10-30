import React from 'react';
import LazyLoad from 'react-lazyload';
import ProjectItem from './Projects/ProjectItem';
import projectData from './Projects/projectsData';
import './Portfolio.css';

const Portfolio = () => {
	return (
		<div id="Portfolio" className="portfolio">
			<div className="portfolio__title">
				<h1>Portfolio</h1>
			</div>
			<div className="portfolio__projects">
				{projectData.map((project) => (
					<LazyLoad height={300} once={true} offset={-200}>
						<ProjectItem project={project} />
					</LazyLoad>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
