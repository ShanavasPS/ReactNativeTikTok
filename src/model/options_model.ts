interface Option {
    id: string;
    answer: string;
  }
  
  interface UserData {
    name: string;
    avatar: string;
  }
  
 export interface McqData {
    type: string;
    id: number;
    playlist: string;
    description: string;
    image: string;
    question: string;
    options: Option[];
    user: UserData;
    correct_options: Option[];
    isOptionPressed: false;
  }