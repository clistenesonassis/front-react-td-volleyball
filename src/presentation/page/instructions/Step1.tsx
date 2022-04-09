import { Button } from '@mui/material';
import React from 'react';

import { Container } from './step1.styles';

interface ownProps {
  next: () => void;
}

const Step1: React.FC<ownProps> = ({ next }) => {
  return (
    <Container onSubmit={next}>
      <h1 className="title">Instruções para o Teste</h1>
      <p className="description">
        Você vai realizar um teste que objetiva avaliar o tempo de resposta e
        qualidade da tomada de decisão na ação de ataque (sideout) no voleibol
        de praia. Desta forma, você visualizará cenas iniciadas com o saque e
        que terão a visão concluída (cena escurece) antes do ataque. Logo em
        seguida você deverá responder o mais rápido possível à questão “o que
        você faria para obter o ponto de ataque?”
      </p>
      <div className="footer">
        <Button type="submit" variant="contained" size="large">
          Continuar
        </Button>
      </div>
    </Container>
  );
};

export default Step1;
