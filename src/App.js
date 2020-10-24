import React from 'react';
import MainPage from './MainPage/MainPage';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import './App.css';

function App() {
	return (
		<div className="app">
			<MainPage />
			<AboutMe />
			<Portfolio />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
