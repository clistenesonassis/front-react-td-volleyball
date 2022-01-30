import React from 'react';
import { useDispatch } from 'react-redux';
import { Page } from './styles';
import { Response } from '../../../../../service/answerService';
import { CalcResult } from '../../../../../utils/CalcResult';
import { VideoService, isMobile } from '../../../../../utils';

import { AnswerImpl } from '../../../../../data/store/reducer/actions';

import { Card } from '../../../../components/card';

export const Result: React.FC<{ history: any }> = ({
  history,
}): JSX.Element => {
  const responseService = Response.getInstance();
  const videos = responseService.answers();
  const playlist = VideoService.get();

  const result = new CalcResult(playlist, videos);
  const dispatch = useDispatch();

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
    history.push('/exam');
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
            Iniciar o teste real
          </button>
        </div>
      </div>
    </Page>
  );
};
