import classes from './Leaderboard.module.css';
import { useSelector } from 'react-redux';

const Leaderboard = () => {
	const records = useSelector((state) => state.leaderboard.records);

	const compare = (a, b) => {
		if (a.time > b.time) return 1;
		if (a.time < b.time) return -1;
		if (a.time === b.time) {
			if (a.steps > b.steps) return 1;
			if (a.steps < b.steps) return -1;
			if (a.steps === b.steps) return 0;
		}
	};

	const sortedRecords = [...records];
	sortedRecords.sort(compare);

	const convertToMinutesAndSeconds = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = time - minutes * 60;

		const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
		const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

		return `${displayMinutes}:${displaySeconds}`;
	};

	return (
		<div className={classes.leaderboards}>
			<h2>Leaderboards</h2>
			<table className={classes.table}>
				<thead>
					<tr>
						<td className={classes.tableHeader}>Place</td>
						<td className={classes.tableHeader}>Time</td>
						<td className={classes.tableHeader}>Steps</td>
					</tr>
				</thead>
				<tbody>
					{records.length === 0 && (
						<td colSpan={3} className={classes.message}>
							No records to display!
						</td>
					)}
					{sortedRecords.map((record, index) => {
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
				</tbody>
			</table>
		</div>
	);
};

export default Leaderboard;
