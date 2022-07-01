import { createSlice } from '@reduxjs/toolkit';

const initialSteps = { steps: 0, isFinished: true };

let counter = 0;

const stepsSlice = createSlice({
  name: 'steps',
  initialState: initialSteps,
  reducers: {
    stepCounter(state) {
      counter++;

      if (counter % 2 !== 0) {
        state.steps++;
      }
    },
    resetStepCounter(state) {
      state.steps = 0;
    },
    gameIsOver(state) {
      state.isFinished = true;
    },
    startGame(state) {
      state.isFinished = false;
    }
  }
})

export const stepsActions = stepsSlice.actions;
export default stepsSlice.reducer;