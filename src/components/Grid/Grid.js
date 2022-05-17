import { useContext, Fragment, useState, useEffect, useCallback, useRef } from 'react';
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
	const [visibleCards, setVisibleCards] = useState([]);
	const timeout = useRef('');

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

		if (visibleCards.includes(id)) {
			return;
		}

		if (selectedCards.length < pair) {
			setSelectedCards((prevState) => [...prevState, id]);
			clearTimeout(timeout.current)
		}
	};

	const reset = useCallback(() => {
		setSelectedCards([]);
		setVisibleCards([]);
	}, []);

	useEffect(() => {
		if (visibleCards.length === shuffledColors.length) {
			props.onShow();
			authCtx.gameIsOver();
			shuffledColors = shuffled(cardColors);
			reset();
		}
	}, [props, visibleCards, reset, authCtx]);

	const checkCardsColor = useCallback((firstElement, secondElement) => {
		if (
			shuffledColors[firstElement].color === shuffledColors[secondElement].color
		) {
			setVisibleCards((prevState) => [
				...prevState,
				firstElement,
				secondElement,
			]);
			setSelectedCards([]);
		}
		timeout.current = setTimeout(() => {
			setSelectedCards([]);
		}, 400);
	}, []);

	useEffect(() => {
		const firstCard = 0;
		const secondCard = selectedCards.length - 1;
		let timeout = null;
		if (selectedCards.length === pair) {
			timeout = setTimeout(checkCardsColor(selectedCards[firstCard], selectedCards[secondCard]), 400)
		}

		return () => {
			clearTimeout(timeout);
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
								: visibleCards.includes(index)
								? `${item.color} ${classes.disable} ${classes.card}`
								: `${item.color} ${classes.hide} ${classes.card}`
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
