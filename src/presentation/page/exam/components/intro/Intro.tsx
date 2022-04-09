import React, { useEffect } from 'react';

import { Container } from './styles';

interface iProps {
  start: () => any;
}

export const Intro: React.FC<iProps> = ({ start }): JSX.Element => {
  useEffect(() => {
    const timeout1 = setTimeout(() => {
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

    const timeout2 = setTimeout(() => {
      animeOutTitle();
    }, 3000);

    const timeout3 = setTimeout(() => {
      animeOutTitle();
      animeInTitle('Prepare-se');
    }, 5000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  return (
    <Container>
      <h1 className="title-intro animate__animated animate__slow animate__fadeInUp">
        Agora você vai testar seus conhecimentos! Boa Sorte!
      </h1>
    </Container>
  );
};
