// Routes.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddWord from './AddWord';
import RandomWord from './RandomWord';
// import AddWord from './AddWord'; // Import the AddWord component
// import RandomWord from './RandomWord'; // Import the RandomWord component
// import MatchWords from './MatchWords'; // Import the MatchWords component

const AppRoutes = ({ words }) => {
	return (
		<Routes>
			<Route path="/random" element={<RandomWord words={words} />} />
			<Route path="/match">{/* <MatchWords /> */}</Route>
			<Route path="/" element={<AddWord></AddWord>} />
		</Routes>
	);
};

export default AppRoutes;
