import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Page } from './styles';
import { ResponseImpl } from '../../../../../service/answerService';
import { CalcResult } from '../../../../../utils/CalcResult';
import { VideoService, isMobile } from '../../../../../utils';

import { AnswerImpl } from '../../../../../data/store/reducer/actions';

import { Card } from '../../../../components/card';
import { iReducer } from '../../../../../domain/interfaces/redux/reducer';
import { Rater } from '../../../../components/rater';

export const Result: React.FC<{ history: any }> = ({
  history,
}): JSX.Element => {
  const responseService = ResponseImpl.getInstance();
  const videos = responseService.answers();
  const playlist = VideoService.get();

  const result = new CalcResult(playlist, videos);
  const dispatch = useDispatch();

  const state: iReducer = useSelector(
    (reducer: { app: iReducer }) => reducer.app,
  );

  const mobile = isMobile()
    ? 'O usuário está usando celular.'
    : 'O usuário está usando computador.';

  const finish = () => {
    dispatch(
      AnswerImpl({
        options: false,
        video: false,
        counterdown: true,
        currentVideo: 0,
        end: false,
      }),
    );
    history.push('/');
  };

  // console.log('sending data....');
  // console.log('user data: ', state.user);
  // console.log('answers: ', responseService.answers());

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
            Iniciar o teste real
          </button>
        </div>
      </div>
    </Page>
  );
};
