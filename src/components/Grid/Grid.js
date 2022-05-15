import { useContext, Fragment, useState, useEffect, useCallback } from 'react';
import classes from './Grid.module.css';
import cardColors from '../../card-colors/card-colors';
import StepContext from '../../store/steps-context';
import Card from './Card';

const generateBoard = (array) => {
	const arrayOfColors = [];
	for (let i = 0; i < cardColors.length; i++) {
		arrayOfColors.push(array[i]);
		arrayOfColors.push(array[i]);
	}
	return arrayOfColors;
};

const shuffled = (array) => {
	return generateBoard(array).sort(() => 0.5 - Math.random());
};

let shuffledColors = shuffled(cardColors);

const Grid = (props) => {
	const pair = 2;
	const authCtx = useContext(StepContext);
	const [selectedCards, setSelectedCards] = useState([]);
	const [quests, setQuests] = useState([]);

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
			return;
		}

		if (quests.includes(id)) {
			return;
		}

		if (selectedCards.length === pair) {
			return;
		}

		if (selectedCards.length < pair) {
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
			shuffledColors = shuffled(cardColors);
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
		}, 400);
	}, []);

	useEffect(() => {
		const firstCard = 0;
		const secondCard = selectedCards.length - 1;

		if (selectedCards.length === pair) {
			checkCardsColor(selectedCards[firstCard], selectedCards[secondCard]);
		}
	}, [selectedCards, checkCardsColor, props, authCtx]);

	return (
		<div className={classes.grid} onClick={stepCounterHandler}>
			{shuffledColors.map((item, index) => (
				<Fragment key={index}>
					<Card
						className={
							selectedCards.includes(index)
								? `${item.color} ${classes.card}`
								: quests.includes(index)
								? `${item.color} ${classes.disable} ${classes.card}`
								: selectedCards.length === 2
								? `${item.color} ${classes.hide} ${classes.card}`
								: `${item.color} ${classes['enable-click']} ${classes.hide} ${classes.card}`
						}
						id={index}
						onClick={() => handleClick(index, item.color)}
					/>
				</Fragment>
			))}
		</div>
	);
};

export default Grid;
