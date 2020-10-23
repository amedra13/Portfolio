import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SpotifyImage from '../../images/spotify.webp';
import './Spotify.css';

const Spotify = () => {
	return (
		<div className="spotify">
			<Grid className="spotify__grid " container direction="row-reverse">
				<Grid
					className="spotify__gridItem bg__white slideRight"
					item
					xs={12}
					md={6}
				>
					<h1>Spotify Clone</h1>
					<div className="spotify__left">
						<img src={SpotifyImage} alt="Project: spotify Palo Alto Clone" />
					</div>
					<Button variant="outlined">Visit Website</Button>
				</Grid>
				<Grid className="spotify__gridItem slideLeft" item xs={12} md={6}>
					<div className="spotify__right">
						<h1>Functionality</h1>
						<p>
							Clone of the Spotify Web App. Using the spotify api, the clone is
							able to pause, play, and skip any tracks found through spotify and
							as well from your current personal playlists. You will be able to
							search for any artists, albums, and tracks and play the music
							available.
						</p>
						<h1>Tools Used</h1>
						<ul>
							<li>React.js</li>
							<li>React Router</li>
							<li>Context Api </li>
							<li>Material UI</li>
							<li>Spotify Api</li>
						</ul>
						<h1>Limitations</h1>
						<ul>
							<li>
								<strong>NOTE:</strong> There is a known issue with the spotify
								api that you use must first play a track from the{' '}
								<i>original</i> spotify app in order to connect to availble
								audio devices. After that the clone will function perfectly.
							</li>
							<li>
								Must as well be a spotify premium member to use clone, due to
								Spotify api requirements
							</li>
							<li>NOT mobile response</li>
						</ul>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default Spotify;
