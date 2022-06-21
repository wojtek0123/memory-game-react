import React, { useState } from 'react';

const LeaderboardsContext = React.createContext({
	records: [],
	addToLeaderboards: (time, steps) => {},
});

export const LeaderboardsContextProvider = ({ children }) => {
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
		<LeaderboardsContext.Provider value={contextValue}>
			{children}
		</LeaderboardsContext.Provider>
	);
};

export default LeaderboardsContext;
