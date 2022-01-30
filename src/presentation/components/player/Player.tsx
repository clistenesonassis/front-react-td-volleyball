import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { AnswerImpl } from '../../../data/store/reducer/actions';
import { iReducer } from '../../../domain/interfaces/redux/reducer';
import { VideoService } from '../../../utils';
import { iVideo } from '../../../utils/videos/Videos';
import { Painel } from './styles/StyledPlayer';

interface videoProgress {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
}

const Player: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const state: iReducer = useSelector(
    (reducer: { app: iReducer }) => reducer.app,
  );
  const playlist: iVideo[] = VideoService.get();

  const analyzeTime = (e: videoProgress, end: number): void => {
    const currentTime = Math.trunc(e.playedSeconds);
    if (currentTime > end) {
      dispatch(AnswerImpl({ options: true, counterdown: false, video: false }));
    }
  };

  return (
    <>
      {state.video ? (
        <ReactPlayer
          url={playlist[state.currentVideo!].src}
          height="700px"
          width="100%"
          id="video"
          playing
          controls={false}
          progressInterval={1000}
          onProgress={(e: videoProgress) => {
            analyzeTime(e, playlist[state.currentVideo!].end);
          }}
        />
      ) : (
        <Painel />
      )}
    </>
  );
};

export default Player;
