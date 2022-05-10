import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Grid from './components/Grid/Grid';
import Timer from './components/UI/Timer';
import Steps from './components/UI/Steps';

const App = () => {
	const [show, setShow] = useState(true);

	const hideModal = () => {
		setShow(false);
	};

	const showModal = () => {
		setShow(true);
	}

	return (
		<div className='App'>
			<h1>Memory Game!</h1>
			<div className='stats'>
				<Steps />
				<Timer show={show} />
			</div>
			{show && <Modal onShow={hideModal} />}
			<Grid onShow={showModal} />
		</div>
	);
};

export default App;
