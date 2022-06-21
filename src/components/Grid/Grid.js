import { useContext, useState, useEffect, useCallback, useRef } from 'react';
import classes from './Grid.module.css';
import cardColors from '../../card-colors/card-colors';
import StepContext from '../../store/steps-context';
import Card from './Card';
import LeaderboardContext from '../../store/leaderboard-context';
import TimerContext from '../../store/timer-context';

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

const Grid = ({ onShow }) => {
	const pair = 2;
	const stepCtx = useContext(StepContext);
	const timeCtx = useContext(TimerContext);
	const recordsCtx = useContext(LeaderboardContext);
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
			stepCtx.stepCounter(element);
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
			clearTimeout(timeout.current);
		}
	};

	const reset = useCallback(() => {
		setSelectedCards([]);
		setVisibleCards([]);
	}, []);

	useEffect(() => {
		if (visibleCards.length === shuffledColors.length) {
			onShow();
			const time = timeCtx.minutes * 60 + timeCtx.seconds
			recordsCtx.addToLeaderboards(time, stepCtx.steps);

			stepCtx.gameIsOver();
			shuffledColors = shuffled(cardColors);
			reset();
		}
	}, [onShow, visibleCards, reset, stepCtx, timeCtx, recordsCtx]);

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
			timeout = setTimeout(
				checkCardsColor(selectedCards[firstCard], selectedCards[secondCard]),
				400
			);
		}

		return () => {
			clearTimeout(timeout);
		};
	}, [selectedCards, checkCardsColor, onShow, stepCtx]);

	return (
		<div className={classes.grid} onClick={stepCounterHandler}>
			{shuffledColors.map((item, index) => (
				<Card
					className={
						selectedCards.includes(index)
							? `${item.color} ${classes.card}`
							: visibleCards.includes(index)
							? `${item.color} ${classes.disable} ${classes.card}`
							: `${item.color} ${classes.hide} ${classes.card}`
					}
					id={index}
					key={index}
					onClick={() => handleClick(index, item.color)}
				/>
			))}
		</div>
	);
};

export default Grid;
