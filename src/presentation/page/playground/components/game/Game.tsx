import React from 'react';

import { useSelector } from 'react-redux';
import { Page } from './styles';
import { Player } from '../../../../components/player';
import { Choices } from '../../../../components/choices';
import { Countdown } from '../../../../components/countdown/countdown';
import { iReducer } from '../../../../../domain/interfaces/redux/reducer';
import { VideoService } from '../../../../../utils';

const playlist = VideoService.getPlaylist(3);

export const Game: React.FC = (): JSX.Element => {
  const state: iReducer = useSelector(
    (reducer: { app: iReducer }) => reducer.app,
  );

  return (
    <Page>
      <div className="container">
        {state.video && <Player playlist={playlist} />}
        {state.options && <Choices />}
      </div>
      {state.counterdown && <Countdown />}
    </Page>
  );
};
