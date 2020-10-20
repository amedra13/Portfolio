import React from 'react';
import Navbar from './Navbar/Navbar';
import MainPage from './MainPage/MainPage';
import BubblesEffect from './BubbleEffect/BubblesEffect';
import './App.css';

function App() {
	return (
		<div className="app">
			<div id="home" className="app__main">
				<Navbar />
				<MainPage />
				<BubblesEffect />
			</div>
			<div id="about" className="app__aboutMe">
				{' '}
				about
			</div>
			<div id="portfolio" className="app__portfolio">
				portfolio
			</div>
			<div id="contact" className="app__contact">
				contact
			</div>
		</div>
	);
}

export default App;
