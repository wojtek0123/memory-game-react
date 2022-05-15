import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StepContextProvider } from './store/steps-context';
import { TimerContextProvider } from './store/timer-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<TimerContextProvider>
		<StepContextProvider>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</StepContextProvider>
	</TimerContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
