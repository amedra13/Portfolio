import React from 'react';
import Tilt from 'react-parallax-tilt';
import './TiltEffect.css';

const TiltedImage = ({ image }) => {
	return (
		<Tilt className="tilt" tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.03}>
			<img className="tiltedImage" src={image} alt="" />
		</Tilt>
	);
};

export default TiltedImage;
