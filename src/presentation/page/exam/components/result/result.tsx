import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Page } from './styles';
import { answerService } from '../../../../../service';
import { CalcResult } from '../../../../../utils/CalcResult';
import { VideoService, isMobile } from '../../../../../utils';

import {
  ChangeState,
  ResetImpl,
} from '../../../../../data/store/reducer/actions';

import { Card } from '../../../../components/card';
import { iReducer } from '../../../../../domain/interfaces/redux/reducer';
import { makeRemoteAnswer } from '../../../../../main/factories/usecases/UserFactory';

export const Result: React.FC<{ history: any }> = ({
  history,
}): JSX.Element => {
  const videos = answerService.answers();
  const playlist = VideoService.get();

  const result = new CalcResult(playlist, videos);
  const dispatch = useDispatch();

  const state: iReducer = useSelector(
    (reducer: { app: iReducer }) => reducer.app,
  );

  useEffect(() => {
    const { user } = state;

    console.log('sending data....');
    console.log('user data: ', state.user);
    console.log('answers: ', answerService.answers());

    makeRemoteAnswer()
      .create({
        owner: user?.email || '',
        answer: answerService.answers(),
      })
      .then(e => {
        console.log('firebase response: ', e);
      })
      .catch(e => console.log('response error: ', e));
  }, []);

  const finish = () => {
    dispatch(ResetImpl());
    history.push('/');
  };

  return (
    <Page>
      <div className="container">
        <div className="result">
          <Card
            title="Acurácia:"
            value={`${result.accuracy()}%`}
            className="accuracy"
          />
          <Card
            title="Eficiência:"
            value={`${result.efficiency()}%`}
            className="efficiency"
          />
          <Card title="ITD:" value={result.itd()} className="itd" />
          <Card
            title="Tempo total:"
            value={`${result.totalTime()}s`}
            className="itd"
          />
          <Card
            title="Tempo médio de resposta:"
            value={`${result.averageResponseTime()}ms`}
            className="itd"
          />
        </div>
        <div>
          <button type="button" onClick={finish}>
            Fazer um novo teste
          </button>
        </div>
      </div>
    </Page>
  );
};
