import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { AnswerImpl } from '../../../data/store/reducer/actions';
import { iReducer } from '../../../domain/interfaces/redux/reducer';
import { iVideo } from '../../../utils/Videos';

interface ownProps {
  playlist: iVideo[];
  playing?: boolean;
  onProgress?: () => any;
}

interface videoProgress {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
}

const Player: React.FC<ownProps> = ({ playlist }): JSX.Element => {
  const [running, setRunning] = useState(true);
  const dispatch = useDispatch();
  const state: iReducer = useSelector(
    (reducer: { app: iReducer }) => reducer.app,
  );

  const analyzeTime = (e: videoProgress, end: number): void => {
    const currentTime = Math.trunc(e.playedSeconds);
    if (currentTime > end) {
      setRunning(false);
      dispatch(AnswerImpl({ options: true, counterdown: false }));
    }
  };

  return (
    <ReactPlayer
      url={playlist[state.currentVideo!].src}
      height="700px"
      width="100%"
      id="video"
      playing={running}
      controls={false}
      progressInterval={1000}
      onProgress={(e: videoProgress) => {
        analyzeTime(e, playlist[state.currentVideo!].end);
      }}
    />
  );
};

export default Player;
