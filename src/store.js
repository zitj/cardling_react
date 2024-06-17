import { configureStore } from '@reduxjs/toolkit';
import wordsReducer from './reducers/wordsSlice';

const store = configureStore({
	reducer: {
		words: wordsReducer,
	},
});

export default store;
