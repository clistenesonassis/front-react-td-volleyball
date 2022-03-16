import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Container } from './home.styles';
import { line1, volei } from '../../base/assets/image';

export const HomeComponent: React.FC<RouteComponentProps> = (
  props,
): JSX.Element => {
  const onNext = (e: any) => {
    e.preventDefault();
    console.log('next function >');
    props.history.push('/register');
  };

  return (
    <Container>
      <div className="home container">
        <div className="home_content">
          <p className="home_content_title">
            Você é rápido para tomar
            <br />
            decisões no vôlei?
          </p>
          <p className="home_content_subtitle">
            A tomada de decisão é um das habilidades mais importantes no
            esporte.
          </p>
          <a href="/login" className="home_content_link">
            Teste agora sua habilidade &gt;
          </a>
        </div>

        <div className="home_image">
          <img src={volei} alt="volei-logo" />
        </div>
      </div>
    </Container>
  );
};
