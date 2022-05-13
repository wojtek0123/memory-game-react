import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Grid from './components/Grid/Grid';
import Timer from './components/UI/Timer';
import Steps from './components/UI/Steps';

const App = (props) => {
	const [show, setShow] = useState(true);

	const hideModal = () => {
		setShow(false);
	};

	const showModal = () => {
		setShow(true);
	};

	// const onFinishedHandler = (isFinished) => {
	// 	console.log(isFinished)
	// 	if (isFinished) {
	// 		setShow(true);
	// 	} else {
	// 		setShow(false);
	// 	}
	// }

	return (
		<Fragment>
			<div className='App'>
				<h1>Memory Game!</h1>
				<div className='stats'>
					<Steps />
					<Timer show={show} />
				</div>
				<Grid onShow={showModal}  />
			</div>

			{show && <Modal onEndGame={hideModal}/>}
		</Fragment>
	);
};

export default App;
//liftState={onFinishedHandler}