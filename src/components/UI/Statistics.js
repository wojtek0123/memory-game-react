import classes from './Statistics.module.css';
import Steps from './Steps';
import Timer from './Timer';
import TimerContext from '../../store/timer-context';
import StepContext from '../../store/steps-context';
import { useContext } from 'react';

const Statistics = () => {
  const stepCtx = useContext(StepContext);
  const timerCtx = useContext(TimerContext);
  
	return (
		<div className={classes.stats}>
			<Steps steps={stepCtx.steps} />
			<Timer minutes={timerCtx.minutes} seconds={timerCtx.seconds} />
		</div>
	);
};

export default Statistics;
