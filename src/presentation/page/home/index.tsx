import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Container } from './styles/styles';
import { background01 } from '../../base/assets/image/index';

const Home: React.FC<RouteComponentProps> = (props): JSX.Element => {
  return (
    <Container>
      <img src={background01} alt="background" />

      <div className="container animate__animated animate__fadeIn">
        <p className="title">Teste seus conhecimentos</p>

        <button
          className="button"
          type="button"
          onClick={() => props.history.push('/register')}
        >
          Iniciar teste
        </button>
      </div>
    </Container>
  );
};

export default Home;
