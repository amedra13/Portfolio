import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';

import './Footer.css';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__iconContainer">
				<IconButton
					target="_blank"
					href="https://www.facebook.com/andres.medrano.98"
				>
					<FacebookIcon />
				</IconButton>
				<IconButton
					target="_blank"
					href="https://www.linkedin.com/in/andres-medrano-19ba91132/"
				>
					<LinkedInIcon />
				</IconButton>
				<IconButton href="/">
					<TwitterIcon />
				</IconButton>
				<IconButton target="_blank" href="https://github.com/amedra13">
					<GitHubIcon />
				</IconButton>
			</div>
		</div>
	);
};

export default Footer;
