// src/reducers/wordsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWords = createAsyncThunk('words/fetchWords', async () => {
	const response = await axios.get('http://localhost:3000/words');
	return response.data;
});

export const addWord = createAsyncThunk('words/addWord', async (newWord) => {
	const response = await axios.post('http://localhost:3000/words', newWord);
	return response.data;
});

const wordsSlice = createSlice({
	name: 'words',
	initialState: {
		words: [],
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchWords.fulfilled, (state, action) => {
				state.words = action.payload;
			})
			.addCase(addWord.fulfilled, (state, action) => {
				state.words.push(action.payload);
			});
	},
});

export default wordsSlice.reducer;
