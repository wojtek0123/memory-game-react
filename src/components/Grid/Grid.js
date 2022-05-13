import { useContext, Fragment, useState, useEffect, useCallback } from 'react';
import StepContext from '../../store/steps-context';
import classes from './Grid.module.css';

const colors = [
	{
		color: 'red',
	},
	{
		color: 'yellow',
	},
	// {
	// 	color: 'green',
	// },
	// {
	// 	color: 'blue',
	// },
	// {
	// 	color: 'purple',
	// },
	// {
	// 	color: 'pink',
	// },
	// {
	// 	color: 'grey',
	// },
	// {
	// 	color: 'brown',
	// },
	// {
	// 	color: 'orange',
	// },
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
	// const [isFinished, setIsFinished] = useState(true);
	const authCtx = useContext(StepContext);

	const stepCounterHandler = (event) => {
		const element = event.target;
		if (
			element.classList.contains(classes.card) &&
			!element.classList.contains(classes.disable)
		) {
			authCtx.stepCounter(element);
		}
	};

	const handleClick = (id) => {
		if (isFlipped === id) {
			return;
		}

		if (quests.includes(id)) {
			return;
		}

		if (selects.length < pair) {
			setSelects((prevState) => [...prevState, id]);
			setIsFlipped(id);
		}
	};

	const reset = useCallback(() => {
		setTimeout(() => {
			setSelects([]);
			setQuests([]);
			setIsFlipped('');
		}, 1000);
	}, []);

	useEffect(() => {
		if (quests.length === shuffledColors.length) {
			props.onShow();
			authCtx.gameIsOver();
			reset();
		}
	}, [props, quests, reset, authCtx]);

	const checkCardsColor = useCallback(
		(firstElement, secondElement) => {
			if (selects.length === 2) {
				if (
					shuffledColors[firstElement].color ===
					shuffledColors[secondElement].color
				) {
					setQuests((prevState) => [...prevState, firstElement, secondElement]);
				}

				setTimeout(() => {
					setSelects([]);
				}, 500);
			}
		},
		[selects]
	);

	useEffect(() => {
		checkCardsColor(selects[0], selects[1]);
	}, [selects, checkCardsColor, props, authCtx]);

	return (
		<div className={classes.grid} onClick={stepCounterHandler}>
			{shuffledColors.map((item, index) => (
				<Fragment key={index}>
					<div
						className={
							selects.includes(index)
								? `${item.color} ${classes.card}`
								: quests.includes(index)
								? `${item.color} ${classes.disable} ${classes.card}`
								: `${item.color} ${classes.hide} ${classes.card}`
						}
						onClick={() => handleClick(index, item.color)}
					></div>
				</Fragment>
			))}
		</div>
	);
};

export default Grid;
