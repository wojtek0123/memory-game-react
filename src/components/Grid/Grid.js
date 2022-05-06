import { useContext } from 'react';
import AuthContext from '../../store/steps-context';
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
	const authCtx = useContext(AuthContext);

	const clicker = (event) => {
		const element = event.target.classList[0];
		authCtx.stepCounter(element);
	}

	return (
		<div
			className={classes.grid}
			onClick={clicker}
		>
			<div className='card'></div>
			<div className='card'></div>
			<div className='card'></div>
			<div className='card'></div>
			<div className='card'></div>
			<div className='card'></div>
			<div className='card'></div>
			<div className='card'></div>
			<div className='card'></div>
			<div className='card'></div>
			<div className='card'></div>
			<div className='card'></div>
			<div className='card'></div>
			<div className='card'></div>
		</div>
	);
};

export default Grid;
