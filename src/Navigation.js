import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FontDownloadOutlinedIcon from '@material-ui/icons/FontDownloadOutlined';
import './Navigation.css';

const Navigation = () => {
	return (
		<div className="navbar">
			<IconButton>
				<FontDownloadOutlinedIcon fontSize="large" />
			</IconButton>
			<div className="navbar__links">
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
	);
};

export default Navigation;
