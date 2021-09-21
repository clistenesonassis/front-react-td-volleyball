import { combineReducers } from 'redux';
import ReducerApp from './reducer';

const reducer = combineReducers({
  app: ReducerApp,
});

export default reducer;
