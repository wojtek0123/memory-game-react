import classes from './ResetButton.module.css';

const ResetButton = ({ onClick }) => {
	return (
		<button className={classes.resetButton} onClick={onClick}>
			Reset
		</button>
	);
};

export default ResetButton;
