import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { AnswerImpl } from '../../../data/store/reducer/actions';
import { validResponse } from '../../../mapper/keyboard-answers';

import { Container, Option } from './styles/choices';
import { Response } from '../../../service/answerService';
import { iReducer } from '../../../domain/interfaces/redux/reducer';
import { iVideo } from '../../../utils/videos/Videos';
import { VideoService } from '../../../utils';

const Choices: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const store: iReducer = useSelector(
    (reducer: { app: iReducer }) => reducer.app,
  );
  let startResponse: any;
  const ResponseService = Response.getInstance();
  let timer: any;
  const playlist: iVideo[] = VideoService.get();

  useEffect(() => {
    document.addEventListener('keydown', myEvent);
    startResponse = moment();

    timer = startTimer();

    return () => removeListener();
  }, []);

  const removeListener = () => {
    document.removeEventListener('keydown', myEvent);
  };

  const myEvent = (event: KeyboardEvent) => {
    removeListener();
    clearTimeout(timer);
    vote(event.key);
  };

  const startTimer = () => {
    return setTimeout(() => {
      const duration = moment
        .duration(moment().diff(startResponse))
        .asSeconds();

      if (duration >= 3) {
        vote('miss');
      } else {
        timer = startTimer();
      }
    }, 1000);
  };

  const vote = (option: string) => {
    const response = validResponse(option);

    if (response) {
      const duration = moment
        .duration(moment().diff(startResponse))
        .asMilliseconds();

      ResponseService.votar({
        response,
        video: store.currentVideo!,
        timeToResponse: duration,
      });

      const isFinished = playlist.length === store.currentVideo! + 1;

      dispatch(
        AnswerImpl({
          options: false,
          video: false,
          end: isFinished,
          counterdown: !isFinished,
          currentVideo: store.currentVideo! + 1,
        }),
      );
    }
  };

  return (
    <Container>
      <Option onClick={() => vote('a')}>Diagonal forte</Option>
      <Option onClick={() => vote('s')}>Diagonal colocado</Option>
      <Option onClick={() => vote('d')}>Corredor forte</Option>
      <Option onClick={() => vote('f')}>Corredor colocado</Option>
      <Option onClick={() => vote(' ')}>Explorando o bloqueio</Option>
    </Container>
  );
};

export default Choices;
