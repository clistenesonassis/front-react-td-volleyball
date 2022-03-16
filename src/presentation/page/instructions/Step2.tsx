import React from 'react';

import { Button } from '../../components/common/button';

import { intruction1, intruction2 } from '../../base/assets/image';

import { Container } from './step2.styles';

interface ownProps {
  onClick?: () => any;
}

const Step2: React.FC<ownProps> = props => {
  return (
    <Container className="container">
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
        <Button onClick={props.onClick} autoFocus>
          Continuar
        </Button>
      </div>
    </Container>
  );
};

export default Step2;
