import { useEffect, useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Grid from './components/Grid/Grid';
import Statistics from './components/Statistics/Statistics';

import { timerActions } from './store/timer';
import { stepsActions } from './store/steps';
import { useDispatch } from 'react-redux';

const App = () => {
	const dispatch = useDispatch();
	const [show, setShow] = useState(true);
	const [firstGame, setFirstGame] = useState(true);
	const [inter, setInter] = useState(null);
	const [isStarted, setIsStarted] = useState(false);

	const hideModal = () => {
		setIsStarted(true);
		setShow(false);
		setFirstGame(false);
		dispatch(stepsActions.resetStepCounter());
		dispatch(timerActions.resetTimer());
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
					dispatch(timerActions.startTimer());
				}, 1000)
			);
	}, [dispatch, show, inter]);

	const renderItem = show ? (
		<Modal onClick={hideModal} firstGame={firstGame} />
	) : (
		<div className='app'>
			<Statistics onReset={showModal} hideBtn={isStarted} />
			<Grid onShow={showModal} />
		</div>
	);

	return <div className='App'>{renderItem}</div>;
};

export default App;
