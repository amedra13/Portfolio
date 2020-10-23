import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import NobuImage from '../../images/nobu_building.jpg';
import './Nobu.css';

const Nobu = () => {
	return (
		<div className="nobu">
			<Grid className="nobu__grid" container>
				<Grid
					className="nobu__gridItem bg__white slideLeft"
					item
					xs={12}
					md={6}
				>
					<h1>Nobu Palo Alto Clone</h1>
					<div className="nobu__left">
						<img src={NobuImage} alt="Project: Nobu Palo Alto Clone" />
					</div>
					<Button variant="outlined">Visit Website</Button>
				</Grid>
				<Grid className="nobu__gridItem slideRight" item xs={12} md={6}>
					<div className="nobu__right">
						<h1>Functionality</h1>
						<p>
							Clone of the Nobu Palo Alto website. Ability to browse through the
							different room types, hotel amenities, and special offers that
							Nobu currently offers to guests. As well as provide information
							about the resturatnt and the menus that is currently offered.
							Currently offers a mock demonstration of booking different Rooms
							with confirmation.
						</p>
						<h1>Tools Used</h1>
						<ul>
							<li>React.js</li>
							<li>React Router</li>
							<li>Redux</li>
							<li>Material UI</li>
						</ul>
						<h1>Limitations</h1>
						<ul>
							<li>
								Mobile Responsive, however there is minor css issues when
								disaplayed on IOS and Andriod Devices.
							</li>
							<li>
								When booking reservation, confirmation will not be emailed
							</li>
							<li>
								Credit Card information is disabled due to not yet implementing
								payment system
							</li>
						</ul>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default Nobu;
