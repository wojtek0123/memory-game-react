import { useContext } from 'react';
import TimerContext from '../../store/timer-context';

const Timer = (props) => {
	const timerCtx = useContext(TimerContext);

	return (
		<p>
			Time:{' '}
			{`${timerCtx.minutes < 10 ? `0${timerCtx.minutes}` : `${timerCtx.minutes}`}:${
				timerCtx.seconds < 10 ? `0${timerCtx.seconds}` : `${timerCtx.seconds}`
			}`}
		</p>
	);
};

export default Timer;
