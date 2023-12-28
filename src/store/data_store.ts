import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit'
import { getNextForYouItem, revealAnswer } from '../network/networkcalls';
import { AnswerData } from '../model/answer_model';
import { McqData } from '../model/options_model';

export interface CounterState {
  value: number;
  currentMcq: McqData;
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
  currentMcq: {
    type: '',
    id: 0,
    playlist: '',
    description: '',
    image: '',
    question: '',
    options: [],
    correct_options: [],
    user: {
      name: '',
      avatar: '',
    },
    isOptionPressed: false,
  },
  answerData: {
    id: 0,
    correct_options: [],
  },
  content: [],
  currentPageIndex: 0,
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
      if(state.currentPageIndex > state.content.length) {
        state.currentMcq = state.content[state.currentPageIndex];
        console.log("setting currentmcq from content");
        console.log(state.currentMcq);
      }
    },
    updateButtonPress: (state, action) => {
      state.content[state.currentPageIndex].isOptionPressed = action.payload;
      state.currentMcq.isOptionPressed = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchNextForYouItem.fulfilled, (state, action) => {
      console.log("received payload inside the reducer")
      const mcqData: McqData = action.payload.mcqData;
      mcqData.isOptionPressed = false;
      mcqData.correct_options = action.payload.answerData;
      console.log("adding this mcqdata to content");
      console.log(mcqData.isOptionPressed)
      console.log(mcqData);
      state.content.push(mcqData);
      console.log("added mcqdata to content");
    });
  },
})

export const { incremented, decremented, updateCurrentPageIndex, updateButtonPress } = counterSlice.actions

export const store = configureStore({
  reducer: counterSlice.reducer
})