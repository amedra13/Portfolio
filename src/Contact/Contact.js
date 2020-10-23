import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Contact.css';

const Contact = () => {
	return (
		<div className="contact">
			<Navbar />
			<div className="contact__header">
				<h1>Contact Me</h1>
				<div>
					<h3>I'd love to help!</h3>
					<p>I'm avaible to create new and exciting projects together</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
