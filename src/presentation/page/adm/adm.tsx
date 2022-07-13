import React from 'react';
import { Container } from './adm.styles';
import { Header } from './components/header/header';
import { TableData } from './components/table/table';

export const Adm: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <div className="container">
        <TableData />
      </div>
    </Container>
  );
};
