import React, { useState } from 'react';

const TimerContext = React.createContext({
	minutes: 0,
	seconds: 0,
	resetTimer: () => {},
	startTimer: () => {},
});

export const TimerContextProvider = (props) => {
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

  if (seconds === 60) {
		setMinutes(minutes + 1);
		setSeconds(0);
	}

	if (minutes === 60) {
		setMinutes(0);
	}

	const startTimer = () => {
    setSeconds(prevState => prevState + 1);
	}

	const resetTimer = () => {
		setMinutes(0);
		setSeconds(0);
	};

	const contextValue = {
		minutes: minutes,
		seconds: seconds,
		resetTimer: resetTimer,
		startTimer: startTimer,
	};

	return (
		<TimerContext.Provider value={contextValue}>
			{props.children}
		</TimerContext.Provider>
	);
};

export default TimerContext;
