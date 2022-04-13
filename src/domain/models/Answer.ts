import { ReducerAnswers } from '../interfaces/redux/reducer';

export interface Answer {
  owner: string;
  avaliacao?: string;
  avaliacaoDescription?: string;
  answer: ReducerAnswers[];
}
