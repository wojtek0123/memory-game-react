const Timer = (props) => {
	return (
		<p>
			Time:{' '}
			{`${props.minutes < 10 ? `0${props.minutes}` : `${props.minutes}`}:${
				props.seconds < 10 ? `0${props.seconds}` : `${props.seconds}`
			}`}
		</p>
	);
};

export default Timer;
