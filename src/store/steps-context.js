import React, { useState } from 'react';

const StepContext = React.createContext({
	steps: 0,
	stepCounter: () => {},
});

export const StepContextProvider = (props) => {
	const [steps, setSteps] = useState(0);
	const [counter, setCounter] = useState(0);

	const stepCounter = () => {
		setCounter((prevState) => prevState + 1);

		if (counter % 2 !== 0) {
			setSteps((prevState) => prevState + 1);
		}
	};

	const contextValue = {
		steps: steps,
		stepCounter: stepCounter,
	};

	return (
		<StepContext.Provider value={contextValue}>
			{props.children}
		</StepContext.Provider>
	);
};

export default StepContext;
