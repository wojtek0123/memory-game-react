import { useContext, Fragment, useState, useEffect, useCallback } from 'react';
import StepContext from '../../store/steps-context';
import classes from './Grid.module.css';
import colors from '../../colors/colors';

const generateBoard = (array) => {
	const arrayOfColors = [];
	for (let i = 0; i < colors.length; i++) {
		arrayOfColors.push(array[i]);
		arrayOfColors.push(array[i]);
	}
	return arrayOfColors;
};

const shuffled = (array) => {
	return generateBoard(array).sort(() => 0.5 - Math.random());
};

let shuffledColors = shuffled(colors);

const Grid = (props) => {
	const pair = 2;
	const [selectedCards, setSelectedCards] = useState([]);
	const [quests, setQuests] = useState([]);
	const authCtx = useContext(StepContext);

	const stepCounterHandler = (event) => {
		const element = event.target;
		if (
			element.classList.contains(classes.card) &&
			!element.classList.contains(classes.disable) &&
			!selectedCards.includes(+element.id)
		) {
			authCtx.stepCounter(element);
		}
	};

	const handleClick = (id) => {
		if (selectedCards.includes(id)) {
			// setSelectedCards([]);
			return;
		}

		if (quests.includes(id)) {
			return;
		}

		if (selectedCards.length === pair) {
			return;
		}

		if (selectedCards.length <= pair) {
			setSelectedCards((prevState) => [...prevState, id]);
		}
	};

	const reset = useCallback(() => {
		setSelectedCards([]);
		setQuests([]);
	}, []);

	useEffect(() => {
		if (quests.length === shuffledColors.length) {
			props.onShow();
			authCtx.gameIsOver();
			shuffledColors = shuffled(colors);
			reset();
		}
	}, [props, quests, reset, authCtx]);

	const checkCardsColor = useCallback((firstElement, secondElement) => {
		if (
			shuffledColors[firstElement].color === shuffledColors[secondElement].color
		) {
			setQuests((prevState) => [...prevState, firstElement, secondElement]);
			setSelectedCards([]);
		}

		setTimeout(() => {
			setSelectedCards([]);
		}, 500);
	}, []);

	useEffect(() => {
		if (selectedCards.length === pair) {
			checkCardsColor(selectedCards[0], selectedCards[1]);
		}
	}, [selectedCards, checkCardsColor, props, authCtx]);

	return (
		<div className={classes.grid} onClick={stepCounterHandler}>
			{shuffledColors.map((item, index) => (
				<Fragment key={index}>
					<div
						className={
							selectedCards.includes(index)
								? `${item.color} ${classes.card}`
								: quests.includes(index)
								? `${item.color} ${classes.disable} ${classes.card}`
								: `${item.color} ${classes.hide} ${classes.card}`
						}
						id={index}
						onClick={() => handleClick(index, item.color)}
					></div>
				</Fragment>
			))}
		</div>
	);
};

export default Grid;
