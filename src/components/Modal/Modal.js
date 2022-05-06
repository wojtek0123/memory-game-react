import { useState } from 'react';
import classes from './Modal.module.css';

const Modal = (props) => {
	const [isFinished, setIsFinished] = useState(false);

	

	return (
		<div className={classes.modal}>
			<h2>Memory Game!</h2>
			{isFinished && (
				<>
					<p>Time: 00:00</p>
					<p>Steps: 0</p>
				</>
			)}
			{!isFinished && <p>Start the game</p>}
			<button onClick={props.onShow} onChange={props.onClick}>Play!</button>
		</div>
	);
};

export default Modal;
