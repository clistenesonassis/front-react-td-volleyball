import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Page } from './styles';
import { CalcResult } from '../../../../../utils/CalcResult';
import { VideoService } from '../../../../../utils';

import { Card } from '../../../../components/card';
import { iReducer } from '../../../../../domain/interfaces/redux/reducer';
import { makeRemoteAnswer } from '../../../../../main/factories/usecases/UserFactory';
import { Rater } from '../../../../components/rater';
import dispatch from '../../../../../data/store/reducer/dispatch';

export const Result: React.FC<{ history: any }> = ({
  history,
}): JSX.Element => {
  const state: iReducer = useSelector(
    (reducer: { app: iReducer }) => reducer.app,
  );

  const playlist = VideoService.get();

  console.log('playlist: ', playlist);

  const result = new CalcResult(playlist, state.answers || []);

  useEffect(() => {
    const { user, answers } = state;

    if (false) {
      console.log('sending data....');
      console.log('user data: ', state.user);
      console.log('answers: ', answers);

      makeRemoteAnswer()
        .create({
          owner: user?.email || '',
          answer: answers || [],
        })
        .then(e => {
          console.log('firebase response: ', e);
        })
        .catch(e => console.log('response error: ', e));
    }
  }, []);

  const finish = () => {
    dispatch.reset();
    history.push('/');
  };

  return (
    <Page>
      <Rater />
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
