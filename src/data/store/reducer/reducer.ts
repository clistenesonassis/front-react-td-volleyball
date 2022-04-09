import { iReducer, Reducer } from '../../../domain/interfaces/redux/reducer';
import { ReducerActions } from './actions';
import { ReducerTypes } from './types';

export const initialState: Reducer = {
  video: false,
  options: false,
  counterdown: false,
  currentVideo: 0,
  score: 0,
  end: false,
  config: {
    hasRating: true,
    trainingVideos: 0,
    validVideos: 0,
  },
  user: {
    name: '',
    birthDate: '',
    email: '',
    phone: '',
    gender: '',
    city: '',
    state: '',
    hand: '',
    practiceTime: 0,
    trainingAmount: 0,
    trainingHours: 0,
    competitiveProfile: '',
    competitiveLevel: '',
    olympicGames: false,
  },
  answers: [],
  playlist: [],
};

const reducer = (state = initialState, action: ReducerActions): iReducer => {
  switch (action.type) {
    case ReducerTypes.changeState:
      return { ...state, ...action.payload };
    case ReducerTypes.setPlaylist:
      return { ...state, playlist: action.payload, end: false };
    case ReducerTypes.answer: {
      state.playlist.shift();
      return {
        ...state,
        answers: [...state.answers, action.payload],
        options: false,
        counterdown: true,
        end: state.playlist.length === 0,
      };
    }
    case ReducerTypes.clearAnswer:
      return { ...state, answers: [] };
    case ReducerTypes.reset:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
