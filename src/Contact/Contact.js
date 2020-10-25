import React, { useState } from 'react';
import emailjs from 'emailjs-com';
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
	const [from_name, setFrom] = useState('');
	const [from_email, setFromEmail] = useState('');
	const [message, setMessage] = useState('');

	const serviceID = 'service_qdq7ozj';
	const templateID = 'template_l5ksq0f';
	const templateParams = {
		from_name: from_name,
		from_email: from_email,
		message: message,
	};
	const userID = 'user_v0mV4jJTJD5COxD4Kbxkb';
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.send(serviceID, templateID, templateParams, userID).then(
			(response) => {
				alert('Success', response.text);
			},
			(error) => {
				console.log('Error', error.text);
			}
		);
		setFrom('');
		setFromEmail('');
		setMessage('');
	};

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
					<form className="contact__form" onSubmit={sendEmail}>
						<p>Feel Free to say Hello!</p>
						<input
							type="text"
							id="name"
							placeholder="Name"
							value={from_name}
							onChange={(e) => setFrom(e.target.value)}
						/>
						<input
							type="email"
							id="email"
							placeholder="Email"
							value={from_email}
							onChange={(e) => setFromEmail(e.target.value)}
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
