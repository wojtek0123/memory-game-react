import React, { useState } from 'react';

const LeaderboardContext = React.createContext({
	records: [],
	addToLeaderboards: (time, steps) => {},
});

export const LeaderboardContextProvider = ({ children }) => {
	const initialState = JSON.parse(localStorage.getItem('records'));
	const [records, setRecords] = useState(initialState || []);

	const addToLeaderboards = (time, steps) => {
		setRecords((prevState) => [...prevState, { time, steps: steps }]);
	};

	localStorage.setItem('records', JSON.stringify(records));

	const contextValue = {
		records: records,
		addToLeaderboards: addToLeaderboards,
	};

	return (
		<LeaderboardContext.Provider value={contextValue}>
			{children}
		</LeaderboardContext.Provider>
	);
};

export default LeaderboardContext;
