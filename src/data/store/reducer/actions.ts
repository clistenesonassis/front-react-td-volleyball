import { Action } from 'redux';
import {
  iReducer,
  ReducerAnswers,
} from '../../../domain/interfaces/redux/reducer';
import { Videos } from '../../../domain/models';
import { ReducerTypes } from './types';

interface ChangeState extends Action {
  type: ReducerTypes.changeState;
  payload: iReducer;
}

interface SetPlaylist extends Action {
  type: ReducerTypes.setPlaylist;
  payload: Videos[];
}

interface StartGame extends Action {
  type: ReducerTypes.startGame;
}

interface StartVideo extends Action {
  type: ReducerTypes.startVideo;
}

interface AwaitAnswer extends Action {
  type: ReducerTypes.awaitAnswer;
}

interface Answer extends Action {
  type: ReducerTypes.answer;
  payload: ReducerAnswers;
}

interface ClearAnswers extends Action {
  type: ReducerTypes.clearAnswer;
}

interface Reset extends Action {
  type: ReducerTypes.reset;
}

export const ChangeState = (params: iReducer): ChangeState => ({
  type: ReducerTypes.changeState,
  payload: params,
});

export const Playlist = (params: Videos[]): SetPlaylist => ({
  type: ReducerTypes.setPlaylist,
  payload: params,
});

export const StartGameImpl = (): StartGame => ({
  type: ReducerTypes.startGame,
});

export const StartVideoImpl = (): StartVideo => ({
  type: ReducerTypes.startVideo,
});

export const AwaitAnswerImpl = (): AwaitAnswer => ({
  type: ReducerTypes.awaitAnswer,
});

export const Answer = (params: ReducerAnswers): Answer => ({
  type: ReducerTypes.answer,
  payload: params,
});

export const ClearAnswer = (): ClearAnswers => ({
  type: ReducerTypes.clearAnswer,
});

export const ResetImpl = (): Reset => ({
  type: ReducerTypes.reset,
});

export type ReducerActions =
  | ChangeState
  | Answer
  | Reset
  | ClearAnswers
  | SetPlaylist
  | AwaitAnswer
  | StartGame
  | StartVideo;
