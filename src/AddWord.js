import React from 'react';

const AddWord = () => {
	return (
		<div>
			<h2>Add new word </h2>

			<div>
				<label htmlFor="word">Word</label>
				<input type="text" />
			</div>
			<div>
				<label htmlFor="context">Context</label>
				<textarea type="text" />
			</div>
			<div>
				<label htmlFor="translation">Translation</label>
				<input type="text" />
			</div>
			<button>Add it!</button>
		</div>
	);
};

export default AddWord;
