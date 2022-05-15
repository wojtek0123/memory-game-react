import React, { useState } from 'react';

const StepContext = React.createContext({
	steps: 0,
	stepCounter: () => {},
	resetStepCounter: () => {},
	gameIsOver: () => {},
	startGame: () => {},
	isFinished: true,
});

export const StepContextProvider = (props) => {
	const [steps, setSteps] = useState(0);
	const [counter, setCounter] = useState(0);
	const [isFinished, setIsFinished] = useState(true);

	const stepCounter = () => {
		setCounter(counter + 1);

		if (counter % 2 !== 0) {
			setSteps(steps + 1);
		}
	};

	const gameIsOver = () => {
		setIsFinished(true);
	};

	const startGame = () => {
		setIsFinished(false);
	};

	const resetStepCounter = () => {
		setSteps(0);
	};

	const contextValue = {
		steps: steps,
		stepCounter: stepCounter,
		resetStepCounter: resetStepCounter,
		gameIsOver: gameIsOver,
		startGame: startGame,
		isFinished: isFinished,
	};

	return (
		<StepContext.Provider value={contextValue}>
			{props.children}
		</StepContext.Provider>
	);
};

export default StepContext;
