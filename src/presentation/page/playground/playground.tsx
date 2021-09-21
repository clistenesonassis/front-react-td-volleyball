import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RouteComponentProps } from 'react-router-dom';
import { Page } from './styles';
import { Player } from '../../components/player';
import { Choices } from '../../components/choices';
import { Countdown } from '../../components/countdown/countdown';
import { iReducer } from '../../../domain/interfaces/redux/reducer';
import { VideoService } from '../../../utils';
import { Intro } from './Intro';

const playlist = VideoService.getPlaylist(3);

const Game: React.FC<RouteComponentProps> = ({ history }): JSX.Element => {
  const [isDemo, setIsDemo] = useState(true);
  const state: iReducer = useSelector(
    (reducer: { app: iReducer }) => reducer.app,
  );

  useEffect(() => {
    if (state.currentVideo === playlist.length) {
      history.push('/result');
    }
  }, [state.currentVideo]);

  return (
    <>
      {isDemo ? (
        <Intro start={() => setIsDemo(false)} />
      ) : (
        <Page>
          <div className="container">
            {state.video && <Player playlist={playlist} />}
            {state.options && <Choices />}
          </div>
          {state.counterdown && <Countdown />}
        </Page>
      )}
    </>
  );
};

export default Game;
