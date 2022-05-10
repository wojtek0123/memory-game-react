import { useContext, Fragment, useState, useEffect } from 'react';
import AuthContext from '../../store/steps-context';
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

const Grid = () => {
	const pair = 2;
	const [isVisible, setIsVisible] = useState('');
	const [selects, setSelects] = useState([]);
	const [quests, setQuests] = useState([]);
	const authCtx = useContext(AuthContext);

	const clickHandler = (event) => {
		const element = event.target;
		authCtx.stepCounter(element);
	};

	const handleClick = (id, color) => {
		if (selects.length < pair) {
			setIsVisible(id);
			setSelects((prevState) => [...prevState, id]);
		}
	};

	useEffect(() => {
		if (selects.length === 2) {
			// console.log(`Pierwszy: ${shuffledColors[selects[0]].color}`)
			if (
				shuffledColors[selects[0]].color === shuffledColors[selects[1]].color
			) {
				setQuests((prevState) => [...prevState, selects[0], selects[1]]);
			}

			setTimeout(() => {
				setSelects([]);
				setIsVisible(null);
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
						onClick={() => handleClick(index, item.color)}
					>
						{selects}
					</div>
				</Fragment>
			))}
		</div>
	);
};

export default Grid;
