import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import { Player } from '../../components/player';

import { Container } from './styles/Intro';

function Intro() {
  document.addEventListener('keyup', event => {
    console.log(event);
    document.getElementById(`button${event.key}`)?.click();
  });

  const handlerClick = () => {
    console.log('clickei');
  };

  return (
    <Container>
      <div>desenvolvendo</div>
    </Container>
  );
}

export default Intro;
