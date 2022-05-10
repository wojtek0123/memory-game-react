import { useContext, Fragment, useState, useEffect } from 'react';
import StepContext from '../../store/steps-context';
import classes from './Grid.module.css';

const colors = [
	{
		color: 'red',
	},
	{
		color: 'yellow',
	},
	{
		color: 'green',
	},
	{
		color: 'blue',
	},
	{
		color: 'purple',
	},
	{
		color: 'pink',
	},
	{
		color: 'grey',
	},
	{
		color: 'brown',
	},
	{
		color: 'orange',
	},
];

const generateBoard = (array) => {
	const arrayOfColors = [];
	for (let i = 0; i < colors.length; i++) {
		arrayOfColors.push(array[i]);
		arrayOfColors.push(array[i]);
	}
	return arrayOfColors;
};

const shuffledColors = generateBoard(colors).sort(() => 0.5 - Math.random());

const Grid = (props) => {
	const pair = 2;
	const [selects, setSelects] = useState([]);
	const [isFlipped, setIsFlipped] = useState('');
	const [quests, setQuests] = useState([]);
	const authCtx = useContext(StepContext);

	const clickHandler = (event) => {
		const element = event.target;
		authCtx.stepCounter(element);
	};

	const handleClick = (id) => {
		if (isFlipped === id) {
			return;
		}

		if (selects.length < pair) {
			setSelects((prevState) => [...prevState, id]);
			setIsFlipped(id);
		}
	};

	const endGame = () => {
		console.log('OK');
		if (quests.length === shuffledColors.length) {
			// end game
			// Show modal
			// display time and steps
			// button to restart
			console.log('Game is over');
			console.log(props.onShow());
			props.onShow();
		}
	};

	useEffect(() => {
		if (selects.length === 2) {
			if (
				// this need to be improved
				shuffledColors[selects[0]].color === shuffledColors[selects[1]].color
			) {
				setQuests((prevState) => [...prevState, selects[0], selects[1]]);
			}

			setTimeout(() => {
				setSelects([]);
			}, 500);
		}
	}, [setQuests, selects]);

	console.log(quests);

	return (
		<div className={classes.grid} onClick={clickHandler}>
			{shuffledColors.map((item, index) => (
				<Fragment key={index}>
					<div
						className={
							selects.includes(index) || quests.includes(index)
								? item.color + ' card'
								: item.color + ' hide card'
						}
						onClick={() => {
							handleClick(index, item.color);
							endGame();
						}}
					></div>
				</Fragment>
			))}
		</div>
	);
};

export default Grid;
