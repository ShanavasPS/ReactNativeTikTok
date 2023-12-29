interface CorrectOption {
  id: string;
  answer: string;
}

export interface AnswerData {
  id: number;
  correct_options: CorrectOption[];
}
