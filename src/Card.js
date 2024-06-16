// Card.js

import React from 'react';

const Card = ({ word, onRandomize, onNext, onPrevious }) => {
	if (!word) {
		return null; // or you can render a placeholder or loading state
	}
	const formatDate = (milliseconds) => {
		const date = new Date(+milliseconds);
		const day = date.getDate().toString().padStart(2, '0');
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const year = date.getFullYear();
		return `${day}/${month}/${year}`;
	};
	return (
		<div className="card">
			<h3>{word.word}</h3>
			<p>
				<strong>Translation:</strong> {word.translation}
			</p>
			<p>
				<strong>Context:</strong> {word.context}
			</p>
			<p>
				<strong>Source:</strong> {word.source}
			</p>
			<p>
				<strong>Date:</strong> {formatDate(word.date)}
			</p>
			{/* <button onClick={onRandomize}>Randomize Word</button> */}
			<button onClick={onPrevious}>Previous word</button>
			<button onClick={onNext}>Next word</button>
		</div>
	);
};

export default Card;
