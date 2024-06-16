// Navigation.js (example)

import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Add Word</Link>
				</li>
				<li>
					<Link to="/random">Random Word</Link>
				</li>
				<li>
					<Link to="/match">Match Words</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
