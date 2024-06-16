import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navigation from './Navigation';
import AppRoutes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import WordsContainer from './WordContainer';

function App() {
	return (
		<Router>
			<WordsContainer>
				<div className="App">
					<h1>Cardling app</h1>
					<Navigation />
					<AppRoutes />
				</div>
			</WordsContainer>
		</Router>
	);
}

export default App;
