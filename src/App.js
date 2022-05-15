import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Grid from './components/Grid/Grid';
import Timer from './components/UI/Timer';
import Steps from './components/UI/Steps';

const App = () => {
	const [show, setShow] = useState(true);
	const [firstGame, setFirstGame] = useState(true);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const [click, setClick] = useState(false);

	const hideModal = () => {
		setShow(false);
		setFirstGame(false);
		setClick(true)
	};

	const showModal = () => {
		setShow(true);
	};

	const displayTime = (minutes, seconds) => {
		setMinutes(minutes);
		setSeconds(seconds);
	};

	return (
		<div className='App'>
			<h1>Memory Game!</h1>
			<div className='stats'>
				<Steps />
				<Timer show={show} onStopTimer={displayTime} click={click} />
			</div>
			<Grid onShow={showModal} />
			{show && (
				<Modal
					onClick={hideModal}
					onFirstGame={firstGame}
					minutes={minutes}
					seconds={seconds}
					// onResetGame={resetTime}
				/>
			)}
		</div>
	);
};

export default App;
