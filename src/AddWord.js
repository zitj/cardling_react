import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWord } from './reducers/wordsSlice';
const AddWord = () => {
	const dispatch = useDispatch();
	const [word, setWord] = useState('');
	const [context, setContext] = useState('');
	const [translation, setTranslation] = useState('');
	const [source, setSource] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newWord = {
			word,
			translation,
			context,
			source,
			type: '/',
			singular_article: '/',
			singular_word: '/',
			plural_article: '/',
			plural_word: '/',
			gender: '/',
			infinitive: '/',
			date: new Date().getTime(),
		};

		try {
			await dispatch(addWord(newWord)).unwrap();
			// Clear input fields after successful submission
			setWord('');
			setTranslation('');
			setContext('');
			setSource('');
		} catch (error) {
			console.error('Error:', error);
		}
	};
	return (
		<div>
			<h2>Add new word</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="word">Word</label>
					<input type="text" id="word" value={word} onChange={(e) => setWord(e.target.value)} />
				</div>
				<div>
					<label htmlFor="context">Context</label>
					<textarea id="context" value={context} onChange={(e) => setContext(e.target.value)} />
				</div>
				<div>
					<label htmlFor="translation">Translation</label>
					<input type="text" id="translation" value={translation} onChange={(e) => setTranslation(e.target.value)} />
				</div>
				<div>
					<label htmlFor="source">Source</label>
					<input type="text" id="source" value={source} onChange={(e) => setSource(e.target.value)} />
				</div>
				<button type="submit">Add it!</button>
			</form>
		</div>
	);
};

export default AddWord;
