import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Container } from './styles/styles';
import { volei } from '../../base/assets/image/index';

const Home: React.FC<RouteComponentProps> = (props): JSX.Element => {
  return (
    <Container>
      <div className="container">
        <div className="content">
          <p className="title">Teste seus conhecimentos</p>

          <button
            className="button"
            type="button"
            onClick={() => props.history.push('/register')}
          >
            Iniciar teste
          </button>
        </div>

        <div className="image">
          <img src={volei} alt="volei-logo" />
        </div>
      </div>
    </Container>
  );
};

export default Home;
