import { configureStore } from '@reduxjs/toolkit';
import timer_slicer from './timer_slicer';
import data_slicer from './data_slicer';

export const store = configureStore({
  reducer: {
    data: data_slicer,
    time: timer_slicer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
