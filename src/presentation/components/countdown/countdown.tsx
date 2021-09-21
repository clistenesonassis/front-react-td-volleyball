import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AnswerImpl } from '../../../data/store/reducer/actions';

import { Container } from './styles/countdown';

export const Countdown: React.FC = (): JSX.Element => {
  const [currentTime, setCurrentTime] = useState(3);
  const dispatch = useDispatch();

  useEffect(() => {
    counter(3);
  }, []);

  const counter = (timer: number) => {
    setCurrentTime(timer);

    if (timer === 0)
      dispatch(AnswerImpl({ options: false, video: true, counterdown: false }));
    else
      setTimeout(() => {
        counter(timer - 1);
      }, 1000);
  };

  return <Container>{currentTime}</Container>;
};
