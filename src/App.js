import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';

function App() {
	const [show, setShow] = useState(true);

	const hideModal = () => {
		setShow(false);
	};

	return <>{show && <Modal onShow={hideModal} />}</>;
}

export default App;
