import { Action } from 'redux';
import { iReducer } from '../../../domain/interfaces/redux/reducer';
import { ReducerTypes } from './types';

export interface Answer extends Action {
  type: ReducerTypes.answer;
  payload: iReducer;
}

export const AnswerImpl = (params: iReducer): Answer => ({
  type: ReducerTypes.answer,
  payload: params,
});

export type ReducerActions = Answer;
