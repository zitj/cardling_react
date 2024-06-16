// WordsContainer.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const WordsContext = React.createContext();

const WordsContainer = ({ children }) => {
	const [words, setWords] = useState([]);

	useEffect(() => {
		async function fetchWords() {
			try {
				const response = await axios.get('http://localhost:3000/words');
				setWords(response.data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		}
		fetchWords();
	}, []);

	const addWord = (newWord) => {
		setWords([...words, newWord]);
	};

	return <WordsContext.Provider value={{ words, addWord }}>{children}</WordsContext.Provider>;
};

export default WordsContainer;
