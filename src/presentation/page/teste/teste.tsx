import React from 'react';
import ReactPlayer from 'react-player';
import { RouteComponentProps } from 'react-router-dom';
import { Container } from './teste.styles';
import { VideoService } from '../../../utils';

const Teste: React.FC<RouteComponentProps> = (props): JSX.Element => {
  const data = VideoService.getPlaylist(3, 'feminino');

  return (
    <Container>
      <div id="section1" className="container">
        <ReactPlayer
          url={[data[0]?.src]}
          height="700px"
          width="100%"
          id="video"
          playing
          controls={false}
          progressInterval={1000}
        />
      </div>
    </Container>
  );
};

export default Teste;
