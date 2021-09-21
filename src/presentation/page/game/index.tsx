import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import dayJs from 'dayjs';
import { Response } from '../../../service/answerService';

import {
  Container,
  Content,
  Options,
  OptionsTitle,
  OptionsContainer,
  Player,
} from './styles';

interface videoProgress {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
}

const Game = (): JSX.Element => {
  const [showOptions, setShowOptions] = useState(false);
  const [paylistIndex, setPaylistIndex] = useState(0);
  let responseStart: Date;
  let responseEnd: Date;
  /*
  const analyzeTime = (e: videoProgress, end: number): void => {
    if (e.playedSeconds > end) {
      console.log('analyzeTime');
      document.getElementById('video')?.click();
      setShowOptions(true);
      start();
    }
  };

  const start = () => {
    responseStart = new Date();
    document.addEventListener('keypress', processEvent);
  };

  const processEvent = ({ key }: KeyboardEvent) => {
    switch (key) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
        document.removeEventListener('keypress', processEvent);
        responseEnd = new Date();
        response(key);
        break;
      default:
        break;
    }
    document.getElementById(`button${key}`)?.click();
  };

  const handlerClick = (option: string) => {
    console.log('clickei');
    response(option);
  };

  const response = (respose: string) => {
    console.log(responseStart);
    console.log(responseEnd);

    const responseOk = Response.set({
      video: paylistIndex,
      response: Number(respose),
    });

    if (responseOk)
      if (paylistIndex < paylist.length - 1) {
        setShowOptions(false);
        setPaylistIndex(paylistIndex + 1);
      } else {
        console.log('resultado final: ', Response.get());
      }
  }; */

  const paylist = [
    {
      src: 'https://www.youtube.com/embed/pH3iqGFLYzU',
      end: 7,
      reponse: {
        diagonalForte: 1,
        diagonalColocado: 2,
        corredorForte: 3,
        corredorColocado: 4,
        explorandoBloqueio: 5,
      },
    },
    {
      src: 'https://www.youtube.com/embed/TmNelNHs6N4',
      end: 7,
      reponse: {
        diagonalForte: 1,
        diagonalColocado: 2,
        corredorForte: 3,
        corredorColocado: 4,
        explorandoBloqueio: 5,
      },
    },
    {
      src: 'https://www.youtube.com/embed/pUABTjkpX7I',
      end: 7,
      reponse: {
        diagonalForte: 1,
        diagonalColocado: 2,
        corredorForte: 3,
        corredorColocado: 4,
        explorandoBloqueio: 5,
      },
    },
  ];

  return (
    <Container>
      <Content layout="layout1">
        {/*
        <Player active={showOptions}>
          <ReactPlayer
            url={paylist[paylistIndex].src}
            onProgress={(e: videoProgress) => {
              analyzeTime(e, paylist[paylistIndex].end);
            }}
            height="500px"
            width="100%"
            id="video"
            playing={!showOptions}
            controls={false}
            progressInterval={1000}
          />
          <div id="layer" />
        </Player>
        */}
      </Content>
    </Container>
  );
};

export default Game;
