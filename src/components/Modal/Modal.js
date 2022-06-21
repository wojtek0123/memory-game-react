import classes from './Modal.module.css';
import Statistics from '../Statistics/Statistics';
import Button from '../UI/Button';
import Leaderboards from '../Leaderboards/Leaderboards';

const Modal = ({ firstGame, onClick }) => {
	return (
		<div className={classes.modal}>
			<h1>Memory Game!</h1>
			{!firstGame && (
				<div>
					<Statistics onClick={onClick} />
					<Button onClick={onClick}>Play Again!</Button>
					<Leaderboards />
				</div>
			)}
			{firstGame && (
				<div>
					<p>Start the game</p>
					<Button onClick={onClick}>Play!</Button>
					<Leaderboards />
				</div>
			)}
		</div>
	);
};

export default Modal;
