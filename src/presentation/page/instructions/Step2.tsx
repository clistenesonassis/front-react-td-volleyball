import { Button } from '@mui/material';
import React from 'react';

import { intruction1, intruction2 } from '../../base/assets/image';

import { Container } from './step2.styles';

interface ownProps {
  back: () => void;
  next: () => void;
}

const Step2: React.FC<ownProps> = ({ back, next }) => {
  return (
    <Container className="container" onSubmit={next}>
      <h1 className="title">Instruções para o Teste</h1>
      <p className="description">
        Seu time sempre será o mais próximo a câmera como indicado na figura
        abaixo pelas setas vermelhas. Antes de iniciar o teste, você verá duas
        cenas para familiarização.
      </p>
      <div className="photo">
        <img alt="intruction1" src={intruction1} />
        <img alt="intruction2" src={intruction2} />
      </div>
      <div className="footer">
        <Button type="button" variant="outlined" size="large" onClick={back}>
          Voltar
        </Button>
        <Button type="submit" variant="contained" size="large">
          Continuar
        </Button>
      </div>
    </Container>
  );
};

export default Step2;
