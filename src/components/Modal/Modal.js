import { Fragment, useContext } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';
import StepContext from '../../store/steps-context';
import TimerContext from '../../store/timer-context';
import Timer from '../UI/Timer';

const Modal = (props) => {
	const timerCtx = useContext(TimerContext);
	const stepCtx = useContext(StepContext);

	const resetGame = () => {
		props.onClick();
		stepCtx.resetStepCounter();
		timerCtx.resetTimer();
	};

	return (
		<Fragment>
			{createPortal(
				<div className={classes.modal}>
					<h2>Memory Game!</h2>
					{!props.onFirstGame && (
						<>
							<Timer minutes={timerCtx.minutes} seconds={timerCtx.seconds} />
							<p>Steps: {stepCtx.steps}</p>
							<button onClick={resetGame}>Play Again!</button>
						</>
					)}
					{props.onFirstGame && (
						<>
							<p>Start the game</p>
							<button onClick={resetGame}>Play!</button>
						</>
					)}
				</div>,
				document.getElementById('modal')
			)}
		</Fragment>
	);
};

export default Modal;
