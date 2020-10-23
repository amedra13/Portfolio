import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import './Footer.css';

const Footer = () => {
	return (
		<div className="footer">
			<h1>Contact Me</h1>
			<div>
				<FacebookIcon fontSize="large" />
				<LinkedInIcon fontSize="large" />
				<TwitterIcon fontSize="large" />
				<EmailIcon fontSize="large" />
			</div>
		</div>
	);
};

export default Footer;
