import React from 'react';
import { Page } from './styles';
import { Response } from '../../../service/answerService';
import { CalcResult } from '../../../utils/CalcResult';
import { VideoService, isMobile } from '../../../utils';

import { Card } from '../../components/card';

const Result: React.FC = (): JSX.Element => {
  const responseService = Response.getInstance();
  const videos = responseService.answers();
  const playlist = VideoService.get();

  const result = new CalcResult(playlist, videos);

  const mobile = isMobile()
    ? 'O usuário está usando celular.'
    : 'O usuário está usando computador.';

  alert(mobile);

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
        </div>
      </div>
    </Page>
  );
};

export default Result;
