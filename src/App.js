import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Grid from './components/Grid/Grid';

function App(props) {
	const [steps, setSteps] = useState(0);
	const [show, setShow] = useState(true);

	const hideModal = () => {
		setShow(false);
	};

	const changeStepsHandler = (input) => {
		setSteps(input);
	}

	return (
		<div className='App'>
			<h1>Memory Game!</h1>
			<div className='stats'>
				<p>Steps: {steps}</p>
				<p>Time: 00:00</p>
			</div>
			{show && <Modal onShow={hideModal} />}
			<Grid onChangeSteps={changeStepsHandler}/>
		</div>
	);
}

export default App;
