import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { validResponse } from '../../../mapper/keyboard-answers';

import { Container, Option } from './choices.styles';
import { iReducer } from '../../../domain/interfaces/redux/reducer';
import disptach from '../../../data/store/reducer/dispatch';

const Choices: React.FC = (): JSX.Element => {
  const store: iReducer = useSelector(
    (reducer: { app: iReducer }) => reducer.app,
  );
  let startResponse: moment.Moment;
  let timer: number;

  useEffect(() => {
    init();

    return () => removeListener();
  });

  const init = () => {
    const myEvent = (event: KeyboardEvent) => {
      document.removeEventListener('keydown', myEvent);
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

    document.addEventListener('keydown', myEvent);
    startResponse = moment();
    timer = startTimer();
  };

  const removeListener = () => {
    clearTimeout(timer);
  };

  const vote = (option: string) => {
    const response = validResponse(option);

    if (response) {
      const duration = moment
        .duration(moment().diff(startResponse))
        .asMilliseconds();

      disptach.Answer({
        response,
        videoId: store.playlist?.[0] ? store.playlist[0].id : '',
        time: duration,
      });
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
