import {
  iReducer,
  ReducerAnswers,
} from '../../../domain/interfaces/redux/reducer';
import {
  Answer,
  AwaitAnswerImpl,
  ChangeState,
  ClearAnswer,
  Playlist,
  ReducerActions,
  ResetImpl,
  StartGameImpl,
  StartVideoImpl,
} from './actions';

import store from '../index';
import { Videos } from '../../../domain/models';

class Dispatch {
  private dispatch = (data: ReducerActions) => store.dispatch(data);

  public Playlist = (params: Videos[]) => this.dispatch(Playlist(params));

  public StartGame = () => this.dispatch(StartGameImpl());

  public StartVideo = () => this.dispatch(StartVideoImpl());

  public AwaitAnswer = () => this.dispatch(AwaitAnswerImpl());

  public Answer = (params: ReducerAnswers) => this.dispatch(Answer(params));

  public clearAnswer = () => this.dispatch(ClearAnswer());

  public reset = () => this.dispatch(ResetImpl());

  public sendChangeState = (params: iReducer) =>
    this.dispatch(ChangeState(params));
}

export default new Dispatch();
