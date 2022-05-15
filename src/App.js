import { useContext, useEffect, useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Grid from './components/Grid/Grid';
import Timer from './components/UI/Timer';
import Steps from './components/UI/Steps';
import TimerContext from './store/timer-context';
import StepContext from './store/steps-context';

const App = () => {
	const stepCtx = useContext(StepContext);
	const timerCtx = useContext(TimerContext);
	const [show, setShow] = useState(true);
	const [firstGame, setFirstGame] = useState(true);
	const [inter, setInter] = useState(null);

	const hideModal = () => {
		setShow(false);
		setFirstGame(false);
	};

	useEffect(() => {
		if (!show && inter === null)
			setInter(
				setInterval(() => {
					timerCtx.startTimer();
				}, 1000)
			);
	}, [timerCtx, show, inter]);

	const showModal = () => {
		setShow(true);
		clearInterval(inter);
		setInter(null);
	};

	return (
		<div className='App'>
			<h1>Memory Game!</h1>
			<div className='stats'>
				<Steps>{stepCtx.steps}</Steps>
				<Timer minutes={timerCtx.minutes} seconds={timerCtx.seconds} />
			</div>
			<Grid onShow={showModal} />
			{show && <Modal onClick={hideModal} onFirstGame={firstGame} />}
		</div>
	);
};

export default App;
