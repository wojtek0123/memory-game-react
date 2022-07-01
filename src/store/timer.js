import { createSlice } from '@reduxjs/toolkit';

const initialTimer = { minutes: 0, seconds: 0 };

const timerSlice = createSlice({
	name: 'timer',
	initialState: initialTimer,
	reducers: {
		resetTimer(state) {
			state.minutes = 0;
			state.seconds = 0;
		},

		startTimer(state) {
			state.seconds++;

      if (state.seconds === 60) {
        state.minutes++;
        state.seconds = 0;
      }

      if (state.minutes === 60) {
        state.minutes = 0;
      }
		},
	},
});

export const timerActions = timerSlice.actions;
export default timerSlice.reducer;
