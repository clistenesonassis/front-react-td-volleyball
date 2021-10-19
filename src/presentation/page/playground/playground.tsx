import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Intro } from './components/intro/Intro';
import { Game } from './components/game/Game';
import { iReducer } from '../../../domain/interfaces/redux/reducer';
import { Result } from './components/result/Result';

const Playground: React.FC<RouteComponentProps> = ({
  history,
}): JSX.Element => {
  const [status, setStatus] = useState('intro');

  const state: iReducer = useSelector(
    (reducer: { app: iReducer }) => reducer.app,
  );

  return (
    <>
      {status === 'intro' && <Intro start={() => setStatus('game')} />}
      {status === 'game' && <Game />}
      {state.end && <Result />}
    </>
  );
};

export default Playground;
