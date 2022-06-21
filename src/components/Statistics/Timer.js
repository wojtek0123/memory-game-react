import classes from './Timer.module.css';

const Timer = ({ minutes, seconds }) => {
	const displayTime = `${minutes < 10 ? `0${minutes}` : `${minutes}`}:${
		seconds < 10 ? `0${seconds}` : `${seconds}`
	}`;

	return (
		<div className={classes.timer}>
			<p>Time: <span>{displayTime}</span></p>
		</div>
	);
};

export default Timer;
