import React, { useState, useEffect } from 'react';
import Card from './Card';

const RandomWord = ({ words }) => {
	useEffect(() => {
		console.log('RandomWord component mounted');
		return () => console.log('RandomWord component unmounted');
	}, []);

	useEffect(() => {
		console.log(words); // This will log whenever words changes
	}, [words]);

	let [wordCounter, setWordCounter] = useState(0);
	const [randomWord, setRandomWord] = useState(null);
	const [wordPresented, setPresentedWord] = useState(words[0]);
	const randomizeWord = () => {
		const randomIndex = Math.floor(Math.random() * words.length);
		setRandomWord(words[randomIndex]);
	};

	const nextWord = () => {
		if (wordCounter !== words.length - 1) {
			setWordCounter((prevCounter) => prevCounter + 1); // Using functional update
		} else {
			setWordCounter(0);
		}
		setPresentedWord(words[wordCounter]);
	};

	const previousWord = () => {
		if (wordCounter !== 0) {
			setWordCounter((prevCounter) => prevCounter - 1); // Using functional update
		} else {
			setWordCounter(words.length - 1);
		}
		setPresentedWord(words[wordCounter]);
	};

	useEffect(() => {
		if (words.length > 0) randomizeWord();
	});
	useEffect(() => {
		if (words.length > 0) setPresentedWord(words[0]);
	}, [words]);

	return (
		<div>
			<h2>Random word</h2>
			{words.length > 0 && <Card word={wordPresented} onRandomize={randomizeWord} onNext={nextWord} onPrevious={previousWord} />}
		</div>
	);
};

export default RandomWord;
