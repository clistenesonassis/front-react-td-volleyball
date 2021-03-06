import React, { useState, useEffect } from 'react';
import dispatch from '../../../data/store/reducer/dispatch';
import { VideoService } from '../../../utils';

import { Container } from './countdown.styles';

export const Countdown: React.FC = (): JSX.Element => {
  const [currentTime, setCurrentTime] = useState(3);

  useEffect(() => {
    let timeout: number;

    const counter = (timer: number) => {
      setCurrentTime(timer);

      if (timer === 0) dispatch.StartVideo();
      else
        timeout = setTimeout(() => {
          counter(timer - 1);
        }, 1000);
    };

    counter(3);

    return () => {
      clearTimeout(timeout);
      const playlist = VideoService.get();

      console.log('playlist: ', playlist);
    };
  }, []);

  return <Container>{currentTime}</Container>;
};
