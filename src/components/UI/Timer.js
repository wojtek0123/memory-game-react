import { useState, useCallback, useEffect } from 'react';

const Timer = (props) => {
	const [inter, setInter] = useState(null);
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);

	if (seconds === 60) {
		setMinutes((prevState) => prevState + 1);
		setSeconds(0);
	}

	if (minutes === 60) {
		setMinutes(0);
	}

	const timer = useCallback(() => {
		if (props.show) {
			return;
		}

		setSeconds((prevState) => prevState + 1);
	}, [props.show]);

	const stopTimer = useCallback(() => {
		clearInterval(inter);
		setInter(null);
		props.onStopTimer(minutes, seconds)
	}, [inter, minutes, seconds, props])

	useEffect(() => {
		if (!props.show && inter === null) {
			setInter(setInterval(timer, 1000));
		}

		if (props.show) {
			stopTimer();
		}
		
	}, [props, inter, timer, stopTimer]);

	return (
		<p>
			Time:{' '}
			{`${minutes < 10 ? `0${minutes}` : `${minutes}`}:${
				seconds < 10 ? `0${seconds}` : `${seconds}`
			}`}
		</p>
	);
};

export default Timer;
