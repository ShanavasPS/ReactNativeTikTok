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
  console.log("calling the fetchNextForYouItem")
  const mcqData = await getNextForYouItem();
  const answerData = await revealAnswer(mcqData.id);
  return { mcqData, answerData };
});

export const fetchPage = createAsyncThunk(
  'data/fetchPage',
  async (pageIndex: number, { getState }) => {
    console.log("createasync was called");
    // Access current store state using getState()
    const currentState = getState() as RootState;

    if(currentState.data.currentPageIndex != pageIndex) {
        // Access specific values from the current state
        const content = currentState.data.content;
        await store.dispatch(updateCurrentPageIndex(pageIndex));

        if(pageIndex > content.length - 5) {
            let count = 5 - (content.length - pageIndex)
            console.log("count is ", count)
            while(count > 0) {
                console.log("number of elements is less")
                await store.dispatch(fetchNextForYouItem());
                count--;
            }
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
      console.log("inside updatecurrentpageindex");
      console.log(state.currentPageIndex);
      if(state.currentPageIndex < state.content.length) {
        state.currentMcq = state.content[state.currentPageIndex];
        console.log("setting currentmcq from content");
        console.log(state.currentMcq);
      }
    },
    updateButtonPress: (state, action) => {
      console.log("update button press")
      const { index, didPress } = action.payload;
      console.log("index is ", index);
      console.log("didPress is ", didPress);
      console.log(state.currentPageIndex)
      state.content[state.currentPageIndex].isOptionPressed = didPress;
      state.content[state.currentPageIndex].buttonTaps[index] = didPress;
      state.currentMcq.isOptionPressed = didPress;
      state.currentMcq.buttonTaps[index] = didPress;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchNextForYouItem.fulfilled, (state, action) => {
      console.log("received payload inside the reducer")
      const mcqData: McqData = action.payload.mcqData;
      mcqData.isOptionPressed = false;
      mcqData.buttonTaps = Array.from({ length: mcqData.options.length }, () => false);
      const answerData: AnswerData = action.payload.answerData;
      mcqData.correct_options = answerData.correct_options;
      console.log("adding this mcqdata to content");
      console.log(mcqData.isOptionPressed)
      console.log(mcqData);
      state.content.push(mcqData);
      console.log("added mcqdata to content");
      console.log("content length is", state.content.length)
    });
  },
})

export const { updateCurrentPageIndex, updateButtonPress } = dataSlice.actions
export default dataSlice.reducer;
