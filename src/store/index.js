import { configureStore } from '@reduxjs/toolkit';
import timerSlice from './timer';
import stepsSlice from './steps';
import leaderboardSlice from './leaderboard';

const store = configureStore({
	reducer: {
		timer: timerSlice,
		steps: stepsSlice,
		leaderboard: leaderboardSlice,
	},
});

export default store;
