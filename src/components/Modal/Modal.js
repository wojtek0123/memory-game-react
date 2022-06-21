import classes from './Modal.module.css';
import Statistics from '../Statistics/Statistics';
import Button from '../UI/Button';
import Leaderboard from '../Leaderboard/Leaderboard';

const Modal = ({ firstGame, onClick }) => {
	return (
		<div className={classes.modal}>
			<h1>Memory Game!</h1>
			{!firstGame && (
				<div>
					<Statistics onClick={onClick} />
					<Button onClick={onClick}>Play Again!</Button>
					<Leaderboard />
				</div>
			)}
			{firstGame && (
				<div>
					<p>Start the game</p>
					<Button onClick={onClick}>Play!</Button>
					<Leaderboard />
				</div>
			)}
		</div>
	);
};

export default Modal;
