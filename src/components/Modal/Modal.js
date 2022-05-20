// import { Fragment  } from 'react';
// import { createPortal } from 'react-dom';
import classes from './Modal.module.css';
import Statistics from '../UI/Statistics';

const Modal = ({ firstGame, onClick }) => {
	return (
		<div className={classes.modal}>
			<h1>Memory Game!</h1>
			{!firstGame && (
				<div>
					<Statistics />
					<button onClick={onClick}>Play Again!</button>
				</div>
			)}
			{firstGame && (
				<div>
					<p>Start the game</p>
					<button onClick={onClick}>Play!</button>
				</div>
			)}
		</div>
	);
};

export default Modal;
