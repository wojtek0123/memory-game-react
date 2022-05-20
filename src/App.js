import { Fragment, useContext, useEffect, useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Grid from './components/Grid/Grid';
import TimerContext from './store/timer-context';
import StepContext from './store/steps-context';
import Statistics from './components/UI/Statistics';

const App = () => {
	const timerCtx = useContext(TimerContext);
	const stepCtx = useContext(StepContext);
	const [show, setShow] = useState(true);
	const [firstGame, setFirstGame] = useState(true);
	const [inter, setInter] = useState(null);

	const hideModal = () => {
		setShow(false);
		setFirstGame(false);
		stepCtx.resetStepCounter();
		timerCtx.resetTimer();
	};

	const showModal = () => {
		setShow(true);
		clearInterval(inter);
		setInter(null);
	};

	useEffect(() => {
		if (!show && inter === null)
			setInter(
				setInterval(() => {
					timerCtx.startTimer();
				}, 1000)
			);
	}, [timerCtx, show, inter]);

	const renderItem = show ? (
		<Modal onClick={hideModal} firstGame={firstGame} />
	) : (
		<Fragment>
			<Statistics />
			<Grid onShow={showModal} />
		</Fragment>
	);

	return <div className='App'>{renderItem}</div>;
};

export default App;
