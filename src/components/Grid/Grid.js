import { useContext, Fragment, useState, useEffect } from 'react';
import AuthContext from '../../store/steps-context';
import classes from './Grid.module.css';

const colors = [
	{
		color: 'red',
		id: 'color-1',
	},
	{
		color: 'red',
		id: 'color-2',
	},
	{
		color: 'yellow',
		id: 'color-3',
	},
	{
		color: 'yellow',
		id: 'color-4',
	},
	{
		color: 'green',
		id: 'color-5',
	},
	{
		color: 'green',
		id: 'color-6',
	},
	{
		color: 'blue',
		id: 'color-7',
	},
	{
		color: 'blue',
		id: 'color-8',
	},
	{
		color: 'purple',
		id: 'color-9',
	},
	{
		color: 'purple',
		id: 'color-10',
	},
	{
		color: 'pink',
		id: 'color-11',
	},
	{
		color: 'pink',
		id: 'color-12',
	},
	{
		color: 'grey',
		id: 'color-13',
	},
	{
		color: 'grey',
		id: 'color-14',
	},
	{
		color: 'brown',
		id: 'color-15',
	},
	{
		color: 'brown',
		id: 'color-16',
	},
	{
		color: 'orange',
		id: 'color-17',
	},
	{
		color: 'orange',
		id: 'color-18',
	},
];

const shuffledColors = colors.sort(() => 0.5 - Math.random());

const Grid = () => {
	const pair = 2;
	const [isSelected, setIsSelected] = useState('');
	const [selects, setSelects] = useState([]);
	const [quests, setQuests] = useState([]);
	const authCtx = useContext(AuthContext);

	const clickHandler = (event) => {
		const element = event.target;
		authCtx.stepCounter(element);
	};

	const handleClick = (id, color) => {
		if (selects.length < pair) {
			setIsSelected(id);
			setSelects((prevState) => [...prevState, color]);
		}
	};

	useEffect(() => {
		if (selects.length === 2) {
			if (selects[0] === selects[1]) {
				setQuests(prevState => [...prevState, selects[0]])
			}

			setTimeout(() => {
				setSelects([])
				setIsSelected(null)
			}, 500);
		}
	}, [setQuests, selects])

	console.log(quests)

	return (
		<div className={classes.grid} onClick={clickHandler}>
			{shuffledColors.map((item) => (
				<Fragment key={item.id}>
					<div
						className={
							isSelected === item.id
								? item.color + ' card'
								: item.color + ' hide card'
						}
						onClick={() => handleClick(item.id, item.color)}
					>
						{selects}
					</div>
				</Fragment>
			))}
		</div>
	);
};

export default Grid;
