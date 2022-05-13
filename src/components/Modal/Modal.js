import { Fragment, useContext } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';
import StepContext from '../../store/steps-context';

const Modal = (props) => {
	const stepCtx = useContext(StepContext);

	const resetGame = () => {
		props.onEndGame()
		stepCtx.resetStepCounter()
	}

	return (
		<Fragment>
			{createPortal(
				<div className={classes.modal}>
					<h2>Memory Game!</h2>
					{props.onEndGame && (
						<>
							<p>Time: 00:00</p>
							<p>Steps: {stepCtx.steps}</p>
						</>
					)}
					{!props.onEndGame && <p>Start the game</p>}
					<button onClick={resetGame}>
						Play!
					</button>
				</div>,
				document.getElementById('modal')
			)}
		</Fragment>
	);
};

export default Modal;
