import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Grid from './components/Grid/Grid';

const App = () => {
	const [steps, setSteps] = useState(0);
	const [show, setShow] = useState(true);
	const [inter, setInter] = useState(null);

	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	
	if (seconds === 60) {
		setMinutes((prevState) => prevState + 1);
		setSeconds(0);
	}

	if (minutes === 60) {
		setMinutes(0);
	}

	const hideModal = () => {
		setShow(false);
	};

	const changeStepsHandler = (stepsData) => {
		setSteps(stepsData);
	};

	const timer = useCallback(() => {
		if (show === true) {
			return;
		}
		
		setSeconds((prevState) => prevState + 1);
	}, [show]);

	useEffect(() => {
		if (show === false && inter === null) {
			setInter(setInterval(timer, 1000));
		}

		if (show === true) {
			clearInterval(inter);
			setInter(null);
		}
	}, [show, timer, inter]);

	return (
		<div className='App'>
			<h1>Memory Game!</h1>
			<div className='stats'>
				<p>Steps: {steps}</p>
				<p>Time: {`${minutes < 10 ? `0${minutes}` : `${minutes}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`}</p>
			</div>
			{show && <Modal onShow={hideModal} />}
			<Grid onChangeSteps={changeStepsHandler} />
		</div>
	);
}

export default App;
