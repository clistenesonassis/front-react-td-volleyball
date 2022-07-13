import React from 'react';
import { TableData } from '../components/table/table';
import { Container } from './dashboard.styles';
import { Header } from '../components/header/header';

export const Dashboard: React.FC = (): JSX.Element => {
  const download = () => {
    console.log('download');
  };

  return (
    <Container>
      <div className="container">
        <div className="options">
          <h2>Resultados:</h2>
          <button type="button" onClick={download}>
            Download
          </button>
        </div>
        <TableData />
      </div>
    </Container>
  );
};
