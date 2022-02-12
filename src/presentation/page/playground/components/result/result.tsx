import React from 'react';
import { useDispatch } from 'react-redux';
import { Page } from './styles';
import { ResponseImpl } from '../../../../../service/answerService';
import { CalcResult } from '../../../../../utils/CalcResult';
import { VideoService, isMobile } from '../../../../../utils';

import { AnswerImpl } from '../../../../../data/store/reducer/actions';

const Result: React.FC<{ history: any }> = ({ history }): JSX.Element => {
  const responseService = ResponseImpl.getInstance();
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
        <h1>Parabéns, você finalizou o modo teste!</h1>
        <h2>Agora você será redirecionado para o teste real.</h2>
        <button type="button" onClick={finish}>
          Iniciar o teste real
        </button>
      </div>
    </Page>
  );
};

export default Result;
