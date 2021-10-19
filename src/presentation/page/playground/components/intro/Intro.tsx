import React, { useEffect } from 'react';

import { Container } from './styles';

interface iProps {
  start: () => any;
}

export const Intro: React.FC<iProps> = ({ start }): JSX.Element => {
  setTimeout(() => {
    start();
  }, 10000);

  const animeOutTitle = () => {
    const element = document.querySelector('.title-intro');
    element!.classList.remove('animate__fadeInUp');
    element!.classList.add('animate__fadeOutUp');
  };

  const animeInTitle = (data: string) => {
    const element = document.querySelector('.title-intro');
    element!.classList.add('animate__fadeInUp');
    element!.classList.remove('animate__fadeOutUp');
    element!.innerHTML = data;

    element!.addEventListener('animationend', () => {
      setTimeout(() => {
        element!.classList.remove('animate__fadeInUp');
        element!.classList.add('animate__fadeOutUp');
      }, 3000);
    });
  };

  setTimeout(() => {
    animeOutTitle();
  }, 3000);

  setTimeout(() => {
    animeOutTitle();
    animeInTitle('Prepare-se');
  }, 5000);

  return (
    <Container>
      <h1 className="title-intro animate__animated animate__slow animate__fadeInUp">
        Você está em ambiente de teste, apenas para se familiarizar com a ideia
        da aplicação.
      </h1>
    </Container>
  );
};
