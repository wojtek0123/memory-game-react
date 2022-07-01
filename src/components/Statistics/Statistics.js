// import { useContext } from 'react';
import classes from './Statistics.module.css';
import Steps from './Steps';
import Timer from './Timer';
// import TimerContext from '../../store/timer-context';
// import StepContext from '../../store/steps-context';
import ResetButton from '../ResetButton/ResetButton';

import { useSelector } from 'react-redux/es/exports';

const Statistics = ({ onReset, hideBtn }) => {
	const steps = useSelector(state => state.steps.steps);
	const minutes = useSelector(state => state.timer.minutes);
	const seconds = useSelector(state => state.timer.seconds);

	// const stepCtx = useContext(StepContext);
	// const timerCtx = useContext(TimerContext);

	return (
		<div className={classes.stats}>
			<Steps steps={steps} />
			{hideBtn && <ResetButton onClick={onReset} />}
			<Timer minutes={minutes} seconds={seconds} />
		</div>
	);
};

export default Statistics;
