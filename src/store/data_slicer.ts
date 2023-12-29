import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit'
import { getNextForYouItem, revealAnswer } from '../network/networkcalls';
import { AnswerData } from '../model/answer_model';
import { McqData } from '../model/options_model';
import { store } from './data_store';
import { RootState } from './data_store';

interface DataState {
  value: number;
  currentMcq: McqData;
  answerData: AnswerData;
  content: McqData[];
  currentPageIndex: number;
}

// Define an async thunk to fetch the data
export const fetchNextForYouItem = createAsyncThunk('data/fetchNextForYouItem', async () => {
  const mcqData = await getNextForYouItem();
  const answerData = await revealAnswer(mcqData.id);
  return { mcqData, answerData };
});

export const fetchPage = createAsyncThunk(
  'data/fetchPage',
  async (pageIndex: number, { getState }) => {
    // Access current store state using getState()
    const currentState = getState() as RootState;

        // Access specific values from the current state
        const content = currentState.data.content;
        await store.dispatch(updateCurrentPageIndex(pageIndex));

        if(pageIndex > content.length - 5) {
            let count = 5 - (content.length - pageIndex)
            while(count > 0) {
                await store.dispatch(fetchNextForYouItem());
                count--;
            }
        }
    return;
  }
);

const initialState: DataState = {
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
    buttonTaps: []
  },
  answerData: {
    id: 0,
    correct_options: [],
  },
  content: [],
  currentPageIndex: -1,
};


const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateCurrentPageIndex: (state, action) => {
      state.currentPageIndex = action.payload;
      if(state.currentPageIndex < state.content.length) {
        state.currentMcq = state.content[state.currentPageIndex];
      }
    },
    updateButtonPress: (state, action) => {
      const { index, didPress } = action.payload;
      state.content[state.currentPageIndex].isOptionPressed = didPress;
      state.content[state.currentPageIndex].buttonTaps[index] = didPress;
      state.currentMcq.isOptionPressed = didPress;
      state.currentMcq.buttonTaps[index] = didPress;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchNextForYouItem.fulfilled, (state, action) => {
      const mcqData: McqData = action.payload.mcqData;
      mcqData.isOptionPressed = false;
      mcqData.buttonTaps = Array.from({ length: mcqData.options.length }, () => false);
      const answerData: AnswerData = action.payload.answerData;
      mcqData.correct_options = answerData.correct_options;
      state.content.push(mcqData);
    });
  },
})

export const { updateCurrentPageIndex, updateButtonPress } = dataSlice.actions
export default dataSlice.reducer;
