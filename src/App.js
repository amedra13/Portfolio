import React from 'react';
import MainPage from './MainPage';
import Navigation from './Navigation';
import './App.css';

function App() {
	return (
		<div className="app">
			<Navigation />
			<MainPage />
		</div>
	);
}

export default App;
