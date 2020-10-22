import React from 'react';
import Grid from '@material-ui/core/Grid';
import SportImage from '../../images/SportCards.png';
import Button from '@material-ui/core/Button';
import './SportCards.css';

const SportCards = () => {
	return (
		<div className="sportcards">
			<Grid className="sportcards__grid" container>
				<Grid className="sportcards__gridItem bg__white" item xs={12} md={6}>
					<h1>Upcoming: Sport Cards Collection</h1>
					<div className="sportcards__left">
						<img src={SportImage} alt="Project: sportcards Palo Alto Clone" />
					</div>
					<Button variant="outlined" disabled>
						Visit Website
					</Button>
				</Grid>
				<Grid className="sportcards__gridItem" item xs={12} md={6}>
					<div className="sportcards__right">
						<h1>Expected Behavior</h1>
						<p>
							Provide a dashboard to manage and observe the inventory and sales
							of your sport card collection all in one place. Be able to track
							individual cards purchase price, sales price, and shipment
						</p>
						<h1>Tools that will be used</h1>
						<ul>
							<li>React.js</li>
							<li>React Router</li>
							<li>Redux</li>
							<li>Material UI</li>
							<li>Firebase FireStore</li>
						</ul>
						<h1>Benefits</h1>
						<ul>
							<li>
								Provide easy way to analyze individual card cost and profit
							</li>
							<li>
								Organize inventory of all cards by purchase date, sale date,
								grading date.
							</li>
							<li>Help track shipment of card sent for grading </li>
						</ul>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default SportCards;
