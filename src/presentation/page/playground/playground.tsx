import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Intro } from './components/intro/Intro';
import { Game } from './components/game/Game';
import Result from './components/result/result';
import { iReducer } from '../../../domain/interfaces/redux/reducer';
import { VideoService } from '../../../utils';
import { answerService } from '../../../service';

const Playground: React.FC<RouteComponentProps> = ({
  history,
}): JSX.Element => {
  const [status, setStatus] = useState('intro');

  const state: iReducer = useSelector(
    (reducer: { app: iReducer }) => reducer.app,
  );

  useEffect(() => {
    const gender =
      state.user?.gender === 'masculino' ? 'masculino' : 'feminino';
    VideoService.getPlaylistTeste(3, gender);
    answerService.clearVotes();
  }, []);

  return (
    <>
      {status === 'intro' && <Intro start={() => setStatus('game')} />}
      {status === 'game' && <Game end={() => setStatus('end')} />}
      {status === 'end' && <Result history={history} />}
    </>
  );
};

export default Playground;
