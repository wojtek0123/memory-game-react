import { useState } from 'react';
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
	const columns = 4;
	const numberOfCards = 14;
  let counter = 0;

  const [steps, setSteps] = useState(0);

	const stepCounter = (event) => {
    console.log('OK');
		if (event.target.classList.contains('card')) {
			counter += 1;
		}
    if (counter % 2 === 0) {
      setSteps(prevState => prevState + 1)
      counter = 0;
    }
	};

	return (
		<div
			className={classes.grid}
			onClick={stepCounter}
		>
			<div className='card'>{steps}</div>
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
