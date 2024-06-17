import React, { useState, useEffect } from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';

const RandomWord = () => {
	const words = useSelector((state) => state.words.words);
	let [wordCounter, setWordCounter] = useState(0);
	const [wordPresented, setPresentedWord] = useState(words[0]);
	const shuffleArray = (array) => {
		let shuffledArray = array.slice(); // Create a copy of the array
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
		}
		return shuffledArray;
	};
	const [shuffledWords, setShuffledWords] = useState(shuffleArray(words));

	useEffect(() => {
		// Shuffle the words array and set the shuffled words in state
		const shuffled = shuffleArray(words);
		setShuffledWords(shuffled);
		setPresentedWord(shuffled[0]); // Set the first word after shuffling
		setWordCounter(0); // Reset the word counter
		console.log(shuffled);
	}, [words]);

	useEffect(() => {
		if (shuffledWords.length > 0) {
			setPresentedWord(shuffledWords[wordCounter]);
		}
	}, [wordCounter, shuffledWords]);

	const nextWord = () => {
		if (wordCounter !== shuffledWords.length - 1) {
			setWordCounter((prevCounter) => prevCounter + 1); // Using functional update
		} else {
			setWordCounter(0);
		}
		setPresentedWord(shuffledWords[wordCounter]);
	};

	const previousWord = () => {
		if (wordCounter !== 0) {
			setWordCounter((prevCounter) => prevCounter - 1); // Using functional update
		} else {
			setWordCounter(shuffledWords.length - 1);
		}
		setPresentedWord(shuffledWords[wordCounter]);
	};

	return (
		<div>
			<h2>Random word</h2>
			{words.length > 0 && <Card word={wordPresented} onNext={nextWord} onPrevious={previousWord} />}
		</div>
	);
};

export default RandomWord;
