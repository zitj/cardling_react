import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navigation from './Navigation';
import AppRoutes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	const [words, setWords] = useState([]);
	// const [randomWord, setRandomWord] = useState(null);

	useEffect(() => {
		async function fetchWords() {
			try {
				const response = await axios.get('http://localhost:3000/words');
				setWords(response.data);
				// console.log(response.data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		}
		fetchWords();
	}, []);

	// useEffect(() => {
	// 	if (words.length > 0) {
	// 		const randomIndex = Math.floor(Math.random() * words.length);
	// 		setRandomWord(words[randomIndex]);
	// 	}
	// }, [words]);

	// const randomizeWord = () => {
	// 	const randomIndex = Math.floor(Math.random() * words.length);
	// 	setRandomWord(words[randomIndex]);
	// };

	return (
		<Router>
			<div className="App">
				<h1>Cardling app</h1>
				<Navigation />
				<AppRoutes words={words} />
				{/* <h1>Random Word</h1> */}
				{/* {randomWord && <Card word={randomWord} onRandomize={randomizeWord} />} */}
			</div>
		</Router>
	);
}

export default App;
