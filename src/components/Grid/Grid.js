import classes from './Grid.module.css';

const colors = [
	'red',
	'yellow',
	'green',
	'blue',
	'purple',
	'pink',
	'white',
	'grey',
	'brown',
	'orange',
];

const Grid = () => {
	const stepCounter = (event) => {};

	return (
		<div className={classes.grid}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Grid;
