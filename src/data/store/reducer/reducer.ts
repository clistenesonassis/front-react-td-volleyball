import { iReducer } from '../../../domain/interfaces/redux/reducer';
import { ReducerActions } from './actions';
import { ReducerTypes } from './types';

export const initialState: iReducer = {
  video: false,
  options: false,
  counterdown: true,
  currentVideo: 0,
  score: 0,
  end: false,
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
};

const reducer = (state = initialState, action: ReducerActions): iReducer => {
  switch (action.type) {
    case ReducerTypes.answer:
      return { ...state, ...action.payload };
    case ReducerTypes.reset:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
