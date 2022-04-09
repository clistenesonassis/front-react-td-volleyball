import {
  iReducer,
  ReducerAnswers,
} from '../../../domain/interfaces/redux/reducer';
import {
  Answer,
  ChangeState,
  ClearAnswer,
  Playlist,
  ReducerActions,
} from './actions';

import store from '../index';
import { Videos } from '../../../domain/models';

class Dispatch {
  private dispatch = (data: ReducerActions) => store.dispatch(data);

  public Playlist = (params: Videos[]) => this.dispatch(Playlist(params));

  public Answer = (params: ReducerAnswers) => this.dispatch(Answer(params));

  public clearAnswer = () => this.dispatch(ClearAnswer());

  public sendChangeState = (params: iReducer) =>
    this.dispatch(ChangeState(params));
}

export default new Dispatch();
