import React, { useState } from 'react';

const AuthContext = React.createContext({
	steps: 0,
	stepCounter: (element) => {},
});

export const AuthContextProvider = (props) => {
	const [steps, setSteps] = useState(0);
	const [counter, setCounter] = useState(0);

	const stepCounter = (element) => {
		if (element.classList.contains('card')) {
			setCounter((prevState) => prevState + 1);
		}

		if (counter % 2 !== 0) {
			setSteps((prevState) => prevState + 1);
		}
	};

	const contextValue = {
		steps: steps,
		stepCounter: stepCounter,
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
