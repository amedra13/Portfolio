import React from 'react';
import MainPage from './MainPage/MainPage';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route exact path="/">
						<MainPage />
					</Route>
					<Route exact path="/about">
						<AboutMe />
					</Route>
					<Route exact path="/portfolio">
						<Portfolio />
					</Route>
					<Route exact path="/contact">
						<Contact />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
