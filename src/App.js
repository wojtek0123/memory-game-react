import { useContext, useEffect, useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Grid from './components/Grid/Grid';
import TimerContext from './store/timer-context';
import Statistics from './components/UI/Statistics';

const App = () => {
	const timerCtx = useContext(TimerContext);
	const [show, setShow] = useState(true);
	const [firstGame, setFirstGame] = useState(true);
	const [inter, setInter] = useState(null);

	const hideModal = () => {
		setShow(false);
		setFirstGame(false);
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

	return (
		<div className='App'>
			<Statistics />
			<Grid onShow={showModal} />
			{show && <Modal onClick={hideModal} onFirstGame={firstGame} />}
		</div>
	);
};

export default App;
