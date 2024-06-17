import React, { useEffect } from 'react';
import './App.css';
import Navigation from './Navigation';
import AppRoutes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchWords } from './reducers/wordsSlice';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchWords());
	}, [dispatch]);

	return (
		<Router>
			<div className="App">
				<h1>Cardling app</h1>
				<Navigation />
				<AppRoutes />
			</div>
		</Router>
	);
}

export default App;
