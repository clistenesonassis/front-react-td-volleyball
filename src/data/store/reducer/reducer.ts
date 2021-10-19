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
};

const reducer = (state = initialState, action: ReducerActions): iReducer => {
  switch (action.type) {
    case ReducerTypes.answer:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
