import { useContext } from 'react';
import classes from './Leaderboards.module.css';
import LeaderboardsContext from '../../store/leaderboards-context';

const Leaderboards = () => {
	const recordsCtx = useContext(LeaderboardsContext);
	const { records } = recordsCtx;

	const compare = (a, b) => {
		if (a.time > b.time) return 1;
		if (a.time < b.time) return -1;
		if (a.time === b.time) {
			if (a.steps > b.steps) return 1;
			if (a.steps < b.steps) return -1;
			if (a.steps === b.steps) return 0;
		}
	};

	records.sort(compare);

	const convertToMinutesAndSeconds = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = time - minutes;

		const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
		const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

		return `${displayMinutes}:${displaySeconds}`;
	};

	return (
		<div className={classes.leaderboards}>
			<h2>Leaderboards</h2>
			<table className={classes.table}>
				<tr>
					<td className={classes.tableHeader}>Place</td>
					<td className={classes.tableHeader}>Time</td>
					<td className={classes.tableHeader}>Steps</td>
				</tr>
				{records.length === 0 && <p>No records to display!</p>}
				{records.map((record, index) => {
					if (index < 10) {
						return (
							<tr key={index} className={classes.tableRow}>
								<td>{index + 1}.</td>
								<td>{convertToMinutesAndSeconds(record.time)}</td>
								<td>{record.steps}</td>
							</tr>
						);
					} else {
						return <></>;
					}
				})}
			</table>
		</div>
	);
};

export default Leaderboards;
