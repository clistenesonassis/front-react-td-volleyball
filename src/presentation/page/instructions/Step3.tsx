import React from 'react';

import { Button } from '../../components/common/button';

import { intruction3, intruction4 } from '../../base/assets/image';

import {
  Container,
  Title,
  Descriptions,
  Photo,
  Warning,
  Footer,
} from './step3.styles';

interface ownProps {
  onClick?: () => any;
}

const Step3: React.FC<ownProps> = props => {
  return (
    <Container className="container">
      <Title>Instruções para o Teste</Title>
      <Descriptions>
        O teste dura aproximadamente 15 minutos e deve ser realizado completo
        para visualização do resultado. Posicione a mão dominante e clique em
        iniciar teste para começar. Preparado?
      </Descriptions>
      <div className="photos">
        <img alt="intructions" src={intruction3} />
        <img alt="intructions" src={intruction4} />
      </div>
      <Warning>
        Mantenha a mão dominante posicionada de modo que cada dedo fique sobre
        uma tecla.
      </Warning>
      <Footer>
        <Button onClick={props.onClick} autoFocus>
          Iniciar teste
        </Button>
      </Footer>
    </Container>
  );
};

export default Step3;
