import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
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
	const [contactMessage, setContactMessage] = useState(
		'Feel Free to say Hello!'
	);

	const sendEmail = async (e) => {
		e.preventDefault();
		await emailjs
			.sendForm(
				'service_qdq7ozj',
				'template_l5ksq0f',
				'#contactMe',
				'user_v0mV4jJTJD5COxD4Kbxkb'
			)
			.then(
				(response) => {
					setContactMessage("Thank you! I'll be in touch soon!");
				},
				(error) => {
					setContactMessage(
						'Sorry, it looks like there was an error. Please try again'
					);
				}
			);
		setFrom('');
		setFromEmail('');
		setMessage('');
		const clearMessage = setTimeout(() => {
			setContactMessage('Missed something? Send me another email!');
		}, 5000);
		return () => clearTimeout(clearMessage);
	};

	return (
		<div id="Contact" className="contact">
			<div className="contact__header">
				<h1>Contact Me</h1>
				<div>
					<h3>I'd love to help!</h3>
					<p>I'm available to create new and exciting projects together</p>
				</div>
			</div>
			<form id="contactMe" className="contact__form" onSubmit={sendEmail}>
				<p>{contactMessage}</p>
				<input
					type="text"
					name="from_name"
					placeholder="Name"
					value={from_name}
					required
					onChange={(e) => setFrom(e.target.value)}
				/>
				<input
					type="email"
					name="from_email"
					placeholder="Email"
					value={from_email}
					pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
					required
					onChange={(e) => setFromEmail(e.target.value)}
				/>
				<textarea
					type="text"
					name="message"
					placeholder="Your Message"
					value={message}
					required
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Contact;
