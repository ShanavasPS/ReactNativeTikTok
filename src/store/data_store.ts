import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit'
import { getNextForYouItem, revealAnswer } from '../network/networkcalls';
import { AnswerData } from '../model/answer_model';
import { McqData } from '../model/options_model';

export interface CounterState {
  value: number;
  mcqData: McqData;
  answerData: AnswerData;
  content: McqData[];
  currentPageIndex: number;
}

// Define an async thunk to fetch the data
export const fetchNextForYouItem = createAsyncThunk('counter/fetchNextForYouItem', async () => {
  console.log("calling the fetchNextForYouItem")
  const mcqData = await getNextForYouItem();
  const answerData = await revealAnswer(mcqData.id);
  return { mcqData, answerData };
});

export const performAsyncOperation = createAsyncThunk(
  'counter/performAsyncOperation',
  async (pageIndex: number, { getState }) => {
    // Access current store state using getState()
    const currentState = getState() as CounterState;

    // Access specific values from the current state
    const content = currentState.content;
    if(pageIndex > content.length - 5) {
      console.log("number of elements is less")
      await store.dispatch(updateCurrentPageIndex(pageIndex));
      await store.dispatch(fetchNextForYouItem());
    }

    return;
  }
);

const initialState: CounterState = {
  value: 0,
  mcqData: {
    type: '',
    id: 0,
    playlist: '',
    description: '',
    image: '',
    question: '',
    options: [
      { id: '1', answer: '' },
      { id: '2', answer: '' },
      // Add more options as needed
    ],
    user: {
      name: '',
      avatar: '',
    },
  },
  answerData: {
    id: 0,
    correct_options: [
      // Provide default values for CorrectOption
      { id: '1', answer: 'Example Answer 1' },
      { id: '2', answer: 'Example Answer 2' },
      // ... add more options as needed
    ],
  },
  content: [],
  currentPageIndex: 0
};


const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented: state => {
      console.log("inside incremented")
      state.value += 1
    },
    decremented: state => {
      console.log("inside decremented")
      state.value -= 1
    },
    updateCurrentPageIndex: (state, action) => {
      state.currentPageIndex = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchNextForYouItem.fulfilled, (state, action) => {
      console.log("received payload inside the reducer")
      state.mcqData = action.payload.mcqData;
      state.answerData = action.payload.answerData;
      state.content.push(state.mcqData);
    });
  },
})

export const { incremented, decremented, updateCurrentPageIndex } = counterSlice.actions

export const store = configureStore({
  reducer: counterSlice.reducer
})