import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import PersonPinCircleOutlinedIcon from '@material-ui/icons/PersonPinCircleOutlined';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Contact.css';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	return (
		<div id="Contact" className="contact">
			<div className="contact__header">
				<h1>Contact Me</h1>
				<div>
					<h3>I'd love to help!</h3>
					<p>I'm avaible to create new and exciting projects together</p>
				</div>
			</div>
			<Grid className="contact__grid" container>
				<Grid item xs={12} md={6}>
					<div className="contact__infoContainer">
						<div>
							<PersonPinCircleOutlinedIcon fontSize="large" />
							<p>Redwood City, CA</p>
						</div>
						<div>
							<PhoneAndroidOutlinedIcon fontSize="large" />
							<p>650-995-6402</p>
						</div>
						<div>
							<EmailOutlinedIcon fontSize="large" />
							<p>amedra13@gmail.com</p>
						</div>
						<div>
							<FacebookIcon fontSize="large" />
							<LinkedInIcon fontSize="large" />
							<TwitterIcon fontSize="large" />
							<GitHubIcon fontSize="large" />
						</div>
					</div>
				</Grid>
				<Grid item xs={12} md={6}>
					<form className="contact__form">
						<p>Feel Free to say Hello!</p>
						<input
							type="text"
							id="name"
							placeholder="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							type="email"
							id="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<textarea
							type="text"
							id="message"
							placeholder="Your Message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
						<button type="submit">Submit</button>
					</form>
				</Grid>
			</Grid>
		</div>
	);
};

export default Contact;
