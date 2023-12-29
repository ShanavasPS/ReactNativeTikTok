import {McqData} from '../model/options_model';
import {AnswerData} from '../model/answer_model';

const fetchData = async (url: string | URL | Request) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const getNextForYouItem = async () => {
  return fetchData('https://cross-platform.rp.devfactory.com/for_you');
};

export const revealAnswer = async (mcqID: number) => {
  return fetchData(
    `https://cross-platform.rp.devfactory.com/reveal?id=${mcqID}`,
  );
};
