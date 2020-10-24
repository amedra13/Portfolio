import React from 'react';
import MainPage from './MainPage/MainPage';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className="app">
			<MainPage />
			<AboutMe />
			<Portfolio />
			<Contact />
		</div>
	);
}

export default App;
