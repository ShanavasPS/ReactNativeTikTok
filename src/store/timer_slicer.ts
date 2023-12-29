// timeSlice.ts

import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface TimeState {
  elapsedTime: number;
}

const initialState: TimeState = {
  elapsedTime: 0,
};

const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setElapsedTime: (state, action: PayloadAction<number>) => {
      state.elapsedTime = action.payload;
    },
    incrementElapsedTime: state => {
      state.elapsedTime += 1;
    },
  },
});

export const {setElapsedTime, incrementElapsedTime} = timeSlice.actions;
export default timeSlice.reducer;
