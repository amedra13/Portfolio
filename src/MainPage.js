import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import FontDownloadOutlinedIcon from '@material-ui/icons/FontDownloadOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

import './MainPage.css';

const MainPage = () => {
	return (
		<div className="main">
			<div className="main__navbar">
				<IconButton>
					<FontDownloadOutlinedIcon fontSize="large" />
				</IconButton>
				<div className="main__links">
					<button>
						Portfolio
						<span className="border"></span>
					</button>
					<button>
						About
						<span className="border"></span>
					</button>
					<button>
						Contact
						<span className="border"></span>
					</button>
				</div>
			</div>
			<div className="main__header">
				<div>
					<p>
						Hello,I am an aspiring Front End Developer located in the Bay Area
					</p>
					<p>Welcome to my Portfolio</p>
				</div>
				<div>
					<FacebookIcon className="main__icon" />
					<LinkedInIcon className="main__icon" />
					<TwitterIcon className="main__icon" />
				</div>
				<div className="main__title">
					<p>Andres</p>
					<p>Medrano</p>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
