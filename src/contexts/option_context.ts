import { createContext } from 'react';
import { McqData, Option } from '../model/options_model';

let defaultMcq: McqData = {
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
  }
  
  let index = 0;
  let option: Option = {
    id: "",
    answer: ""
  }

  export const OptionContext = createContext(defaultMcq);
  export const SelectedOptionContext = createContext({index, option});