import NobuImage from '../../images/nobu_building.jpg';
import SpotifyImage from '../../images/spotify.webp';
import SportCardsImage from '../../images/SportCards.png';

const projects = [
	{
		name: 'Nobu Palo Alto Clone',
		image: `${NobuImage}`,
		functionality:
			'Clone of the Nobu Palo Alto website. Ability to browse through the different room types, hotel amenities, and special offers that Nobu currently offers to guests. As well as provide information about the resturatnt and the menus that is currently offered. Currently offers a mock demonstration of booking different Rooms with confirmation.',
		tools: ['React.js', 'React Router', 'Redux', 'Material UI'],
		limitations: [
			'Mobile Responsive, however there is minor css issues when disaplayed on IOS and Andriod Devices.',
			'When booking reservation, confirmation will not be emailed.',
			'Credit Card information is disabled due to not yet implementing payment system.',
		],
		reverse: false,
		completed: true,
		website: 'https://nobu-clone.web.app/',
	},
	{
		name: 'Spotify Clone',
		image: `${SpotifyImage}`,
		functionality:
			'Clone of the Spotify Web App. Using the spotify api, the clone is able to pause, play, and skip any tracks found through spotify and as well from your current personal playlists. You will be able to search for any artists, albums, and tracks and play the music available.',
		tools: [
			'React.js',
			'React Router',
			'Context Api',
			'Material UI',
			'Spotify Api',
		],
		limitations: [
			'There is a known issue with the spotify api that you use must first play a track from the original spotify app in order to connect to availble audio devices. After that the clone will function perfectly.',
			'Must as well be a spotify premium member to use clone, due to Spotify api requirements.',
			'NOT mobile response',
		],
		reverse: true,
		completed: true,
		website: 'https://spotify-clone-1867c.web.app/',
	},
	{
		name: 'Sport Cards Collection',
		image: `${SportCardsImage}`,
		functionality:
			'Provide a dashboard to manage and observe the inventory and sales of your sport card collection all in one place. Be able to track individual cards purchase price, sales price, and shipment.',
		tools: [
			'React.js',
			'React Router',
			'Redux',
			'Material UI',
			'Firebase Firestore',
		],
		limitations: [
			'Provide easy way to analyze individual card cost and profit,',
			'Organize inventory of all cards by purchase date, sale date, grading date.',
			'Help track shipment of card sent for grading.',
		],
		reverse: false,
		completed: false,
		website: '/',
	},
];

export default projects;
