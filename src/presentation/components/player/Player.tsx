/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import dispatch from '../../../data/store/reducer/dispatch';
import { iReducer } from '../../../domain/interfaces/redux/reducer';
import { Container } from './player.styles';

interface videoProgress {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
}

const Player: React.FC = (): JSX.Element => {
  const state: iReducer = useSelector(
    (reducer: { app: iReducer }) => reducer.app,
  );

  const playlist = state.playlist ? state.playlist : [];
  let isAllowed: boolean;

  useEffect(() => {
    isAllowed = true;
  }, []);

  const analyzeTime = (e: videoProgress, end: number): void => {
    const currentTime = Math.trunc(e.playedSeconds);
    if (currentTime > end && isAllowed) {
      isAllowed = false;
      dispatch.sendChangeState({
        options: true,
        counterdown: false,
        video: false,
      });
    }
  };

  return (
    <Container>
      <ReactPlayer
        url={playlist[0].src}
        height="100%"
        width="100%"
        id="player"
        playing={state.video}
        stopOnUnmount
        controls={false}
        progressInterval={200}
        onProgress={(e: videoProgress) => {
          analyzeTime(e, playlist[0].end);
        }}
      />
    </Container>
  );
};

export default Player;
