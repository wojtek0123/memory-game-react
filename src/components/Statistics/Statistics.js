import { useContext } from 'react';
import classes from './Statistics.module.css';
import Steps from './Steps';
import Timer from './Timer';
import TimerContext from '../../store/timer-context';
import StepContext from '../../store/steps-context';
import ResetButton from '../ResetButton/ResetButton';

const Statistics = ({ onReset, hideBtn }) => {
	const stepCtx = useContext(StepContext);
	const timerCtx = useContext(TimerContext);

	return (
		<div className={classes.stats}>
			<Steps steps={stepCtx.steps} />
			{hideBtn && <ResetButton onClick={onReset} />}
			<Timer minutes={timerCtx.minutes} seconds={timerCtx.seconds} />
		</div>
	);
};

export default Statistics;
