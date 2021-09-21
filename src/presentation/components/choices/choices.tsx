import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { AnswerImpl } from '../../../data/store/reducer/actions';
import { validResponse } from '../../../mapper/keyboard-answers';

import { Container, Option } from './styles/choices';
import { Response } from '../../../service/answerService';
import { iReducer } from '../../../domain/interfaces/redux/reducer';

const Choices: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const store: iReducer = useSelector(
    (reducer: { app: iReducer }) => reducer.app,
  );
  let startResponse: any;
  const ResponseService = Response.getInstance();

  useEffect(() => {
    document.addEventListener('keydown', myEvent);
    startResponse = moment();

    isTimeout();

    return () => removeListener();
  }, []);

  const removeListener = () => {
    document.removeEventListener('keydown', myEvent);
  };

  const myEvent = (event: KeyboardEvent) => {
    vote(event.key);
  };

  const isTimeout = () => {
    setTimeout(() => {
      const duration = moment
        .duration(moment().diff(startResponse))
        .asSeconds();
      console.log('duration: ', duration);

      if (duration >= 3) {
        vote('miss');
      } else {
        isTimeout();
      }
    }, 1000);
  };

  const vote = (option: string) => {
    const response = validResponse(option);

    if (response) {
      const duration = moment
        .duration(moment().diff(startResponse))
        .asMilliseconds();

      console.log('votando...', response);
      ResponseService.votar({
        response,
        video: store.currentVideo!,
        timeToResponse: duration,
      });
      dispatch(
        AnswerImpl({
          options: false,
          video: false,
          counterdown: true,
          currentVideo: store.currentVideo! + 1,
        }),
      );
    }
  };

  return (
    <Container>
      <Option>Diagonal forte</Option>
      <Option>Diagonal colocado</Option>
      <Option>Corredor forte</Option>
      <Option>Corredor colocado</Option>
      <Option>Explorando o bloqueio para destro</Option>
    </Container>
  );
};

export default Choices;
