import React from 'react';
import { Container } from './header.styles';

export const Header: React.FC = (): JSX.Element => {
  return (
    <Container>
      <div className="container">
        <div className="left">
          <div className="item">Dashboard</div>
          <div className="item">Detalhes</div>
        </div>

        <div className="right">
          <div className="item">Dashboard</div>
          <div className="item">Detalhes</div>
        </div>
      </div>
    </Container>
  );
};
