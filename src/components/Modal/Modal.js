import { Fragment, useContext } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';
import StepContext from '../../store/steps-context';

const Modal = (props) => {
	const stepCtx = useContext(StepContext);
	// const [resetTime, setResetTime] = useState(false);

	const resetGame = () => {
		props.onClick();
		stepCtx.resetStepCounter();
		// props.onResetGame();
	};
	
	return (
		<Fragment>
			{createPortal(
				<div className={classes.modal}>
					<h2>Memory Game!</h2>
					{!props.onFirstGame && (
						<>
							<p>
								Time: {props.minutes < 10 ? '0' + props.minutes : props.minutes}
								:{props.seconds < 10 ? '0' + props.seconds : props.seconds}
							</p>
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
