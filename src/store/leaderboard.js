import { createSlice } from '@reduxjs/toolkit';

const localStorageRecords = JSON.parse(localStorage.getItem('records'));
const initialLeaderboard = { records: localStorageRecords || [] };

const leaderboardSlice = createSlice({
	name: 'leaderboard',
	initialState: initialLeaderboard,
	reducers: {
		addToLeaderboards(state, actions) {
			const leaderboardStat = {
				time: actions.payload.time,
				steps: actions.payload.steps,
			};
			state.records = [...state.records, leaderboardStat];
			localStorage.setItem('records', JSON.stringify(state.records));
		},
	},
});

export const leaderboardActions = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
